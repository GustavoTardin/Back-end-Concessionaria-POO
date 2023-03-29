import { Router } from 'express';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const carRouter = Router();

const carODM = new CarODM();
const carService = new CarService(carODM);
const carController = new CarController(carService);

carRouter.post('/', carController.createCar);

export default carRouter;