import { Request, Response } from 'express';
import { ICarService } from '../Interfaces';

class CarController {
  service: ICarService;

  constructor(serv: ICarService) {
    this.service = serv;
  }

  public createCar = async (req: Request, res: Response) => {
    const newCar = await this.service.register(req.body);
    return res.status(201).json(newCar);
  };
}

export default CarController;