import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.engineCapacity = motor.engineCapacity;
    this.category = motor.category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public getCategory() {
    return this.category;
  }
}

export default Motorcycle;
