import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import motorcycleSchema from '../Utils/JoiSchemas/motorcycleSchema';
import AbstractService from './AbstractService';

class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor() {
    const motorODM = new MotorcycleODM();
    super(motorODM, motorcycleSchema);
  }
}

export default MotorcycleService;