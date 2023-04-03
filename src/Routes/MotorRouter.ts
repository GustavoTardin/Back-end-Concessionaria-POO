import { Router } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcicleController from '../Controllers/MotorcycleController';
import MotorcycleODM from '../Models/MotorcycleODM';

const motorRouter = Router();

const motorcycleODM = new MotorcycleODM();
const motorbikeService = new MotorcycleService(motorcycleODM);
const motorbikeController = new MotorcicleController(motorbikeService);

motorRouter.post('/', motorbikeController.createVehicle);
motorRouter.get('/', motorbikeController.getVehicles);
motorRouter.get('/:id', motorbikeController.getVehicleById);
motorRouter.put('/:id', motorbikeController.updateById);
motorRouter.delete('/:id', motorbikeController.deleteById);

export default motorRouter;
