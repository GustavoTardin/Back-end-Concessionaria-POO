import { Router } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcicleController from '../Controllers/MotorcycleController';

const motorRouter = Router();

const motorbikeService = new MotorcycleService();
const motorbikeController = new MotorcicleController(motorbikeService);

motorRouter.post('/', motorbikeController.createVehicle);
motorRouter.get('/', motorbikeController.getVehicles);
motorRouter.get('/:id', motorbikeController.getVehicleById);
motorRouter.put('/:id', motorbikeController.updateById);
motorRouter.delete('/:id', motorbikeController.deleteById);

export default motorRouter;
