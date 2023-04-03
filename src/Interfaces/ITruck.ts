import IVehicle from './IVehicle';

interface ITruck extends IVehicle {
  weight: number,
  loadingCapacity: number,
  type: string,
}

export default ITruck;