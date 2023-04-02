import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import CustomError from '../Errors/CustomError';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import VehicleTypes from './VehicleTypes';

class VehicleFactory {
  public static createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public static createMotorcycleDomain(mt: IMotorcycle): Motorcycle {
    return new Motorcycle(mt);
  }

  public static createDomain(type: string, obj: ICar | IMotorcycle): Car | Motorcycle {
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
