// import Joi from 'joi';
// import JoiValidation from '../Utils/JoiValidations';
import AbstractODM from '../Models/AbstractODM';

abstract class AbstractService<T> {
  protected model: AbstractODM<T>;
  // protected Joi: JoiValidation;

  constructor(ODM: AbstractODM<T>) {
    //  const joi = new JoiValidation(schema);
    this.model = ODM;
    // this.Joi = joi;
  }

  async updateById(id: string, updatedVehicle: T): Promise<T> {
    // this.Joi.validateVehicle(updatedVehicle);
    const vehicle = await this.model.updateById(id, updatedVehicle);
    return vehicle;
  }

  async register(vehicle: T): Promise<T> {
    // this.Joi.validateVehicle(vehicle);
    const newVehicle = await this.model.create(vehicle);
    return newVehicle;
  }
  async getAll(): Promise<T[]> {
    const vehicles = await this.model.getAll();
    console.log(vehicles);
    return vehicles;
  }
  async getById(id: string): Promise<T> {
    const vehicle = await this.model.getById(id);
    return vehicle;
  }

  async deleteById(id: string): Promise<void> {
    await this.model.deleteById(id);
  }
}

export default AbstractService;
