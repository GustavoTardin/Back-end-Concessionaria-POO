import ICarService from '../Interfaces/services/ICarService';
import ICar from '../Interfaces/ICar';
import AbstractODM from '../Models/AbstractODM';
import Car from '../Domains/Car';

class CarService implements ICarService {
  protected model: AbstractODM<ICar>;

  constructor(ODM: AbstractODM<ICar>) {
    this.model = ODM;
  }

  private createDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    } 
    return null;
  }

  async register(car: ICar): Promise<Car> {
    const newCar = await this.model.create(car);
    const domain = this.createDomain(newCar);
    return domain as Car;
  }
  async getAll(): Promise<Car[]> {
    const cars = await this.model.getAll();
    const domains = cars.map((e) => this.createDomain(e));
    return domains as Car[];
  }
  async getById(id: string): Promise<Car | null> {
    const car = await this.model.getById(id);
    const domain = this.createDomain(car);
    return domain;
  }
}

export default CarService;
