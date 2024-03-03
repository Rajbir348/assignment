// controllers/userController.js
import { ObjectId } from 'mongodb';
import {db}  from '../config/db.js';
import CarModel from '../models/Car.js';
import DealershipModel from '../models/Dealership.js';
import UserModel from '../models/User.js';
import DealModel from '../models/Deal.js';

export const getDealershipsWithCar = async (req, res) => {
  try {
    const { carName } = req.params;
    console.log(carName);
   
    const car=await CarModel.findCarByName(carName,db);
    const carId=car._id;
    // await db.collection('dealerships').updateMany(
      
    //   { $push: { cars: carId } }
    // );
    const dealerships = await DealershipModel.findDealershipsByCarId(carId, db);
    res.status(200).json(dealerships );
  } catch (error) {
    console.error('Error fetching dealerships with car:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getUserVehiclesWithDealerInfo = async (req, res) => {
  try {
    const { userId } = req.user; 
    
    
    const user=await UserModel.findOneById(userId,db);
    
    const vehicles = await db.collection('sold_vehicles').find({userId: new ObjectId(userId) }).toArray();
    
    // Fetch dealer information for each vehicle
    const vehiclesWithDealerInfo = [];
    for (const vehicle of vehicles) {
      const dealer = await db.collection('dealerships').findOne({ _id: vehicle.dealershipId });
      const dealerInfo=dealer.dealershipInfo;
      vehiclesWithDealerInfo.push({ ...vehicle, dealerInfo });
    }

    res.status(200).json({ vehiclesWithDealerInfo });
  } catch (error) {
    console.error('Error fetching user vehicles with dealer info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getDealsOnCar = async (req, res) => {
  try {
    const { carName } = req.params;
    
    const car=await CarModel.findCarByName(carName,db);
    console.log(car)
    const deals = await db.collection('deals').find({ carId: new ObjectId(car._id)}).toArray();
    console.log(deals)
    res.status(200).json({ deals });
  } catch (error) {
    console.error('Error fetching deals on car:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
