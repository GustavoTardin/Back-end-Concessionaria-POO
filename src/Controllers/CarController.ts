import { NextFunction, Request, Response } from 'express';
import ICarService from '../Interfaces/services/ICarService';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';

class CarController {
  service: ICarService;

  constructor(serv: ICarService) {
    this.service = serv;
  }

  private createDomain(newCar: ICar): Car {
    return new Car(newCar);
  }

  public createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCar = await this.service.register(req.body);
      const domain = this.createDomain(newCar);
      return res.status(201).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public getCars = async (req: Request, res: Response) => {
    const cars = await this.service.getAll();
    const domain = cars.map((e) => this.createDomain(e));
    return res.status(200).json(domain);
  };

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const car = await this.service.getById(id);
      const domain = this.createDomain(car);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const newCar = await this.service.updateById(id, req.body);
      const domain = this.createDomain(newCar);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };
}

export default CarController;
