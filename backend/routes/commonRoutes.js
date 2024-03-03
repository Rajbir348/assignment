// routes/commonRoutes.js

import express from 'express';
import { getAllCars, getCarsInDealership, getAllDeals, buyVehicle } from '../controllers/commonController.js';

const router = express.Router();

// Common endpoints
router.get('/cars', getAllCars);
router.get('/cars/:dealershipId', getCarsInDealership);

router.get('/deals/:dealershipId', getAllDeals);
router.post('/buy/:vehicleId', buyVehicle);

export default router;
