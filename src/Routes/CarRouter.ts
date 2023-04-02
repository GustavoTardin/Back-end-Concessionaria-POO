import { Router } from 'express';
import CarService from '../Services/CarService';
import CarController from '../Controllers/CarController';

const carRouter = Router();

const carService = new CarService();
const carController = new CarController(carService);

carRouter.post('/', carController.createVehicle);
carRouter.get('/', carController.getVehicles);
carRouter.get('/:id', carController.getVehicleById);
carRouter.put('/:id', carController.updateById);
carRouter.delete('/:id', carController.deleteById);

export default carRouter;