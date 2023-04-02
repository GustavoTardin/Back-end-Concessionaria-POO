import { Router } from 'express';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const carRouter = Router();

const carODM = new CarODM();
const carService = new CarService(carODM);
const carController = new CarController(carService);

carRouter.post('/', carController.createCar);
carRouter.get('/', carController.getCars);
carRouter.get('/:id', carController.getCarById);
carRouter.put('/:id', carController.updateById);

export default carRouter;