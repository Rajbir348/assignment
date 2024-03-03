// controllers/dealershipController.js
import { ObjectId } from 'mongodb';
import  {db} from '../config/db.js';
import CarModel from '../models/Car.js';
import DealModel from '../models/Deal.js';
import DealershipModel from '../models/Dealership.js';

// Add cars to dealership
export const addCarToDealership = async (req, res) => {
  try {
    
    const { userId:dealershipId } = req.user; // Assuming dealershipId is extracted from JWT
    
    const  carDetails = req.body;
    
    const car = { ...carDetails, dealershipId };
    
   
    const newCar = await CarModel.insertOne(car,db);  //add car to cars collection
   
    await DealershipModel.addCarToDealership(newCar.insertedId,dealershipId,db);//add car to dealership
    res.status(201).json({ message: 'Car added to dealership successfully' });
  } catch (error) {
    console.error('Error adding car to dealership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add deals to dealership
export const addDealToDealership = async (req, res) => {
  try {
    
    const { userId:dealershipId } = req.user; // Assuming dealershipId is extracted from JWT
    const  dealDetails  = req.body;
    const deal = { ...dealDetails, dealershipId };
    
    const newDeal = await DealModel.insertOne(deal,db);//add deal to deals collection
    await DealershipModel.addDealToDealership(newDeal.insertedId,dealershipId,db);//add deal to dealership
    res.status(201).json({ message: 'Deal added to dealership successfully' });
  } catch (error) {
    console.error('Error adding deal to dealership:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const getSoldVehiclesWithOwnerInfo = async (req, res) => {
  try {
    
    const { userId:dealershipId } = req.user; // Assuming dealership ID is available in req.user
  
   console.log(dealershipId);
    // Get all sold vehicles of the dealership
    const soldVehicles = await db.collection('sold_vehicles').find({ dealershipId:new ObjectId(dealershipId) }).toArray();
     console.log(soldVehicles);
    // Fetch owner information for each sold vehicle
    const soldVehiclesWithOwnerInfo = [];
    for (const soldVehicle of soldVehicles) {
      const ownerInfo = await db.collection('users').findOne({ _id: soldVehicle.userId });
      soldVehiclesWithOwnerInfo.push({ ...soldVehicle, ownerInfo });
    }

    res.status(200).json({ soldVehiclesWithOwnerInfo });
  } catch (error) {
    console.error('Error fetching sold vehicles with owner info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};