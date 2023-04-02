import ICarService from '../Interfaces/services/ICarService';
import ICar from '../Interfaces/ICar';
import AbstractODM from '../Models/AbstractODM';
import Car from '../Domains/Car';
import JoiValidation from '../Middlewares/JoiValidations';

class CarService implements ICarService {
  protected model: AbstractODM<ICar>;
  protected Joi: JoiValidation;

  constructor(ODM: AbstractODM<ICar>) {
    const joi = new JoiValidation();
    this.model = ODM;
    this.Joi = joi;
  }
  async updateById(id: string, updatedCar: ICar): Promise<Car> {
    this.Joi.validateCar(updatedCar);
    const car = await this.model.updateById(id, updatedCar);
    const domain = this.createDomain(car);
    return domain;
  }

  private createDomain(newCar: ICar): Car {
    return new Car(newCar);
  }

  async register(car: ICar): Promise<Car> {
    this.Joi.validateCar(car);
    const newCar = await this.model.create(car);
    const domain = this.createDomain(newCar);
    return domain;
  }
  async getAll(): Promise<Car[]> {
    const cars = await this.model.getAll();
    const domains = cars.map((e) => this.createDomain(e));
    return domains;
  }
  async getById(id: string): Promise<Car> {
    const car = await this.model.getById(id);
    const domain = this.createDomain(car);
    return domain;
  }
}

export default CarService;
