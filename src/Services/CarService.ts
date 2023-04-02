import AbstractService from './AbstractService';
import carSchema from '../Utils/JoiSchemas/carSchema';
import CarODM from '../Models/CarODM';
import ICar from '../Interfaces/ICar';

class CarService extends AbstractService<ICar> {
  constructor() {
    const carODM = new CarODM();
    super(carODM, carSchema);
  }
}

export default CarService;
