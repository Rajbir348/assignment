// controllers/commonController.js

import DealershipModel from '../models/Dealership.js';
import {db} from '../config/db.js';
import { ObjectId } from 'mongodb';
export const getAllCars = async (req, res) => {
  try {
    
    const cars = await db.collection('cars').find({}).toArray();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching all cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCarsInDealership = async (req, res) => {
  try {
    const { dealershipId } = req.params;
   
    const dealership = await DealershipModel.findOneById(dealershipId, db);
    if (!dealership) {
      return res.status(404).json({ error: 'Dealership not found' });
    }
    console.log(dealership.cars);
    const carIds = dealership.cars.map(id => new ObjectId(id))
    const cars = await db.collection('cars').find({ _id: { $in: carIds } }).toArray();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars in dealership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const buyVehicle = async (req, res) => {
  try {
    const { userType, userId } = req.user;
    const { vehicleId } = req.params;
   
    
    if (userType.userType === 'user') {
      // Find the vehicle by ID
      const vehicle = await db.collection('cars').findOne({ _id: new ObjectId(vehicleId) });

      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }

      try {
        // Update user document to add the vehicle to their list of owned vehicles
        await db.collection('users').updateOne(
          { user_id: userId },
          { $push: { vehicle_info: vehicleId } }
        );

        // Update dealership document to remove the vehicle from their inventory
        await db.collection('dealerships').updateOne(
          { cars: vehicleId },
          { $pull: { cars: vehicleId } }
        );

        // Create a new sold vehicle document
        const soldVehicle = {
          car_id: vehicleId,
          vehicle_info: vehicle.car_info
        };
        await db.collection('sold_vehicles').insertOne(soldVehicle);

        // Vehicle purchased successfully
        res.status(200).json({ message: 'Vehicle purchased successfully' });
      } catch (error) {
        throw error;
      }
    } else if (userType.userType === 'dealership') {
      // Get dealership name from request body
      const { email} = req.body;
      const vehicle = await db.collection('cars').findOne({ _id: new ObjectId(vehicleId) });

      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }
      // Find user ID by name
      const user = await db.collection('users').findOne({ user_email:email});

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      try {
        // Remove the vehicle from dealership's inventory
        const updateResult = await db.collection('dealerships').updateOne(
          { _id: new ObjectId(userId) },
          { $pull: { cars: vehicleId } }
        );
        
        if (updateResult.modifiedCount === 0) {
          return res.status(404).json({ error: 'Vehicle not found in dealership inventory' });
        }
        
        // Add the vehicle to sold vehicles
        const soldVehicle = {
          car_id: vehicleId,
          vehicle_info: vehicle
        };
        await db.collection('sold_vehicles').insertOne(soldVehicle);

        // Add sold vehicle to dealership's sold vehicles
        await db.collection('dealerships').updateOne(
          { _id: new ObjectId(userId) },
          { $push: { sold_vehicles: soldVehicle._id } }
        );

        // Create a new deal document
        const deal = {
          
          car_id: vehicleId,
          user_id: user._id
        };
        await db.collection('deals').insertOne(deal);

        // Add deal to dealership's deals
        await db.collection('dealerships').updateOne(
          { _id: new ObjectId(userId) },
          { $push: { deals: deal._id } }
        );

        // Vehicle sold successfully
        res.status(200).json({ message: 'Vehicle sold successfully' });
      } catch (error) {
        throw error;
      }
    } else {
      res.status(403).json({ error: 'Forbidden: Only users and dealerships can purchase vehicles' });
    }
  } catch (error) {
    console.error('Error purchasing vehicle:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




export const getAllDeals = async (req, res) => {
  try {
    const { dealershipId } = req.params;
   
    const deals = await db.collection('deals').find({ dealershipId }).toArray();
    res.status(200).json({ deals });
  } catch (error) {
    console.error('Error fetching all deals from dealership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
