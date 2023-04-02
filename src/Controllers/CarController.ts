import { NextFunction, Request, Response } from 'express';
import ICarService from '../Interfaces/services/ICarService';

class CarController {
  service: ICarService;

  constructor(serv: ICarService) {
    this.service = serv;
  }

  public createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCar = await this.service.register(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  };

  public getCars = async (req: Request, res: Response) => {
    const cars = await this.service.getAll();
    return res.status(200).json(cars);
  };

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const car = await this.service.getById(id);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const newCar = await this.service.updateById(id, req.body);
      return res.status(200).json(newCar);
    } catch (error) {
      next(error);
    }
  };
}

export default CarController;
