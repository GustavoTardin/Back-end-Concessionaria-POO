import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractService from '../Services/AbstractService';
import VehicleFactory from '../Utils/VehicleFactory';

class MotorcicleController {
  service: AbstractService<IMotorcycle>;

  constructor(serv: AbstractService<IMotorcycle>) {
    this.service = serv;
  }

  public createMotorcycle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newMotorbike = await this.service.register(req.body);
      const domain = VehicleFactory.createMotorcycleDomain(newMotorbike);
      return res.status(201).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public getMotorCycles = async (req: Request, res: Response) => {
    const motorbikes = await this.service.getAll();
    const domains = motorbikes.map((e) => VehicleFactory.createMotorcycleDomain(e));
    return res.status(200).json(domains);
  };

  public getMotorbikeById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const motorbike = await this.service.getById(id);
      const domain = VehicleFactory.createMotorcycleDomain(motorbike);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const newMotorbike = await this.service.updateById(id, req.body);
      const domain = VehicleFactory.createMotorcycleDomain(newMotorbike);
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };
}

export default MotorcicleController;
