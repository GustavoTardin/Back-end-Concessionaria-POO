import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import Vehicle from '../Domains/Vehicle';
import CustomError from '../Errors/CustomError';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IVehicle from '../Interfaces/IVehicle';
import VehicleTypes from './VehicleTypes';

class VehicleFactory {
  public static createDomain(type: string, obj: IVehicle): Vehicle {
    if (type === VehicleTypes.CAR) {
      return new Car(obj as ICar);
    }
    if (type === VehicleTypes.MOTORCYCLE) {
      return new Motorcycle(obj as IMotorcycle);
    }
    throw new CustomError('Tipo de veículo inválido', '500');
  }
}

export default VehicleFactory;
