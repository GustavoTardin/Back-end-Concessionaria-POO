import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from '../Models/AbstractODM';
import motorcycleSchema from '../Utils/JoiSchemas/motorcycleSchema';
import AbstractService from './AbstractService';

class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor(ODM: AbstractODM<IMotorcycle>) {
    super(ODM, motorcycleSchema);
  }
}

export default MotorcycleService;