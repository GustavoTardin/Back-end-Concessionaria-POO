import Car from '../Domains/Car';
import Motorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

class VehicleFactory {
  public static createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public static createMotorcycleDomain(mt: IMotorcycle): Motorcycle {
    return new Motorcycle(mt);
  }
}

export default VehicleFactory;
