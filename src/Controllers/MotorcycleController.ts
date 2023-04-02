import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractController from './AbstractController';
import AbstractService from '../Services/AbstractService';

class MotorcicleController extends AbstractController<IMotorcycle> {
  constructor(service: AbstractService<IMotorcycle>) {
    super('motorcycle', service);
  }
}

export default MotorcicleController;
