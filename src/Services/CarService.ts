import AbstractService from './AbstractService';
import carSchema from '../Utils/JoiSchemas/carSchema';
import ICar from '../Interfaces/ICar';
import AbstractODM from '../Models/AbstractODM';

class CarService extends AbstractService<ICar> {
  constructor(ODM: AbstractODM<ICar>) {
    super(ODM, carSchema);
  }
}

export default CarService;
