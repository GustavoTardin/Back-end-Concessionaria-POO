import { Router } from 'express';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const carRouter = Router();

const carService = new CarService();
const carController = new CarController(carService);

carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getCars);
carRouter.get('/:id', carController.getCarById);
carRouter.put('/:id', carController.updateById);

export default carRouter;