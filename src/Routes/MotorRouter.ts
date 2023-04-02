import { Router } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import MotorcicleController from '../Controllers/MotorcycleController';

const motorRouter = Router();

const motorbikeService = new MotorcycleService();
const motorbikeController = new MotorcicleController(motorbikeService);

motorRouter.post('/', motorbikeController.createMotorcycle);
motorRouter.get('/', motorbikeController.getMotorCycles);
motorRouter.get('/:id', motorbikeController.getMotorbikeById);
motorRouter.put('/:id', motorbikeController.updateById);

export default motorRouter;
