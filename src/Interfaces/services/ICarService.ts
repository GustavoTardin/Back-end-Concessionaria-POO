import Car from '../../Domains/Car';
import ICar from '../ICar';

interface ICarService {
  register(car: ICar): Promise<Car>,
  getAll(): Promise<Car[]>,
  getById(id: string): Promise<Car>
  updateById(id: string, car: ICar): Promise<Car>
}

export default ICarService;
