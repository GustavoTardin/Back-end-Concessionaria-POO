import { NextFunction, Request, Response } from 'express';
import AbstractService from '../Services/AbstractService';
import VehicleFactory from '../Utils/VehicleFactory';
import IVehicle from '../Interfaces/IVehicle';

abstract class AbstractController<T> {
  private _service: AbstractService<T>;
  public domainType: string;

  constructor(type: string, service: AbstractService<T>) {
    this._service = service;
    this.domainType = type;
  }

  public createVehicle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newVehicle = await this._service.register(req.body);
      const domain = VehicleFactory.createDomain(
        this.domainType,
        newVehicle as unknown as IVehicle,
      );
        
      return res.status(201).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public getVehicles = async (req: Request, res: Response) => {
    const vehicles = await this._service.getAll();
    const domain = vehicles.map((e) => (
      VehicleFactory.createDomain(this.domainType, e as unknown as IVehicle)));

    return res.status(200).json(domain);
  };

  public getVehicleById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const vehicle = await this._service.getById(id);
      const domain = VehicleFactory.createDomain(
        this.domainType,
        vehicle as unknown as IVehicle,
      );
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const newVehicle = await this._service.updateById(id, req.body);
      const domain = VehicleFactory.createDomain(
        this.domainType,
        newVehicle as unknown as IVehicle,
      );
      return res.status(200).json(domain);
    } catch (error) {
      next(error);
    }
  };

  public deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      await this._service.deleteById(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

export default AbstractController;