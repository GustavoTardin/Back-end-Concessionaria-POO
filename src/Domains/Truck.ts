import ITruck from '../Interfaces/ITruck';
import Vehicle from './Vehicle';

class Truck extends Vehicle {
  private _weight: number;
  private _loadingCapacity: number;
  private _type: string;

  constructor(truck: ITruck) {
    super(truck);
    this._weight = truck.weight;
    this._loadingCapacity = truck.loadingCapacity;
    this._type = truck.type;
  }

  get weight(): number {
    return this._weight;
  }

  get loadingCapacity(): number {
    return this._loadingCapacity;
  }

  get type(): string {
    return this._type;
  }
}

export default Truck;