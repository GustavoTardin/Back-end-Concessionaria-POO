import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import AbstractService from '../Services/AbstractService';
import VehicleFactory from '../Utils/VehicleFactory';

class CarController {
  service: AbstractService<ICar>;

  constructor(serv: AbstractService<ICar>) {
    this.service = serv;
  }

  public createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCar = await this.service.register(req.body);
      const domain = VehicleFactory.createCarDomain(newCar);
      return res.status(201).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public getCars = async (req: Request, res: Response) => {
    const cars = await this.service.getAll();
    const domain = cars.map((e) => VehicleFactory.createCarDomain(e));
    return res.status(200).json(domain);
  };

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const car = await this.service.getById(id);
      const domain = VehicleFactory.createCarDomain(car);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const newCar = await this.service.updateById(id, req.body);
      const domain = VehicleFactory.createCarDomain(newCar);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };
}

export default CarController;
