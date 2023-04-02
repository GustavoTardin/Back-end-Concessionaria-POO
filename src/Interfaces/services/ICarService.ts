import ICar from '../ICar';

interface ICarService {
  register(car: ICar): Promise<ICar>,
  getAll(): Promise<ICar[]>,
  getById(id: string): Promise<ICar>
  updateById(id: string, car: ICar): Promise<ICar>
}

export default ICarService;
