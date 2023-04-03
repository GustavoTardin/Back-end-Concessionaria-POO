import { Router } from 'express';
import TruckODM from '../Models/TruckODM';
import TruckService from '../Services/TruckService';
import TruckController from '../Controllers/TruckController';

const truckRouter = Router();

const truckODM = new TruckODM();
const truckService = new TruckService(truckODM);
const truckController = new TruckController(truckService);

truckRouter.post('/', truckController.createVehicle);
truckRouter.get('/', truckController.getVehicles);
truckRouter.get('/:id', truckController.getVehicleById);
truckRouter.put('/:id', truckController.updateById);
truckRouter.delete('/:id', truckController.deleteById);

export default truckRouter;