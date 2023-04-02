import ICar from '../Interfaces/ICar';
import AbstractController from './AbstractController';
import AbstractService from '../Services/AbstractService';

class CarController extends AbstractController<ICar> {
  constructor(service: AbstractService<ICar>) {
    super('car', service);
  }
}

export default CarController;