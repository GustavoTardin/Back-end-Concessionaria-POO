import Car from '../../Domains/Car';
import ICar from '../ICar';

interface ICarService {
  register(car: ICar): Promise<Car>,
  getAll(): Promise<Car[]>,
  getById(id: string): Promise<Car | null>
}

export default ICarService;
