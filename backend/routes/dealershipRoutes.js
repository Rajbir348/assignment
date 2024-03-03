// routes/dealershipRoutes.js

import express from 'express';
import { addCarToDealership, addDealToDealership, getSoldVehiclesWithOwnerInfo } from '../controllers/dealershipController.js';

const router = express.Router();

// Dealership endpoints
router.post('/cars', addCarToDealership);
router.post('/deals', addDealToDealership);
router.get('/sold-vehicles', getSoldVehiclesWithOwnerInfo);

export default router;
