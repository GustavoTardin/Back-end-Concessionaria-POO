import ITruck from '../Interfaces/ITruck';
import AbstractODM from '../Models/AbstractODM';
import truckSchema from '../Utils/JoiSchemas/truckSchema';
import AbstractService from './AbstractService';

class TruckService extends AbstractService<ITruck> {
  constructor(ODM: AbstractODM<ITruck>) {
    super(ODM, truckSchema);
  }
}

export default TruckService;