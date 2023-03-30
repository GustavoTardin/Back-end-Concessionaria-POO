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
      console.log(error);
      next(error);
    }
  };
}

export default CarController;
