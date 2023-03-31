import {
  Model,
  models,
  Schema,
  model,
  isValidObjectId,
} from 'mongoose';
import CustomError from '../Errors/CustomError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    try {
      return await this.model.create({ ...obj });
    } catch {
      throw new CustomError('Propriedas inválidas', '400');
    }
  }

  public async getAll(): Promise<T[]> {
    const documents = await this.model.find();
    return documents;
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError('Invalid mongo id', '422');
    const document = await this.model.findById(id);
    return document;
  }

  public async updateById(id: string, obj: T) {
    if (!isValidObjectId(id)) throw new CustomError('Invalid mongo id', '422');
    const newDocument = await this.model.findByIdAndUpdate();
  }

}

export default AbstractODM;
