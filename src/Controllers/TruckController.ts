import ITruck from '../Interfaces/ITruck';
import AbstractService from '../Services/AbstractService';
import AbstractController from './AbstractController';

class TruckController extends AbstractController<ITruck> {
  constructor(service: AbstractService<ITruck>) {
    super('truck', service);
  }
}

export default TruckController;