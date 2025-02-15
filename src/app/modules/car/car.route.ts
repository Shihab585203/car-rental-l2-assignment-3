import { Router } from 'express';
import validateRequest from '../utils/validateRequest';
import {
  createCarValidationSchema,
  updateCarValidationSchema,
} from './car.validation';
import { CarControllers } from './car.controller';

const router = Router();

router.post(
  '/create-car',
  validateRequest(createCarValidationSchema),
  CarControllers.createCar,
);

router.get('/', CarControllers.getAllCars);

router.get('/:id', CarControllers.getSingleCarFromDB);

router.put(
  '/:id',
  validateRequest(updateCarValidationSchema),
  CarControllers.updateCarFromDB,
);

router.delete('/:id', CarControllers.deletedCarFromDB);

export const CarRoutes = router;
