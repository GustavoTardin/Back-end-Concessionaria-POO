import Car from '../../Domains/Car';
import ICar from '../ICar';

interface ICarService {
  register(car: ICar): Promise<Car>,
  getAll(): Promise<ICar[]>,
  getById(id: string): Promise<ICar | null>
}

export default ICarService;
