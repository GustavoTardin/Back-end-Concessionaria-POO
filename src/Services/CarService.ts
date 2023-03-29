import { ICar, ICarService } from '../Interfaces';
import AbstractODM from '../Models/AbstractODM';
import Car from '../Domains/Car';

class CarService implements ICarService {
  protected model: AbstractODM<ICar>;

  constructor(ODM: AbstractODM<ICar>) {
    this.model = ODM;
  }

  private createDomain(newCar: ICar): Car {
    return new Car(newCar);
  }

  async register(car: ICar): Promise<Car> {
    const newCar = await this.model.create(car);
    const domain = this.createDomain(newCar);
    return domain;
  }
  getAll(): Promise<ICar[]> {
    throw new Error('Method not implemented.');
  }
  getById(): Promise<ICar | null> {
    throw new Error('Method not implemented.');
  }
}

export default CarService;
