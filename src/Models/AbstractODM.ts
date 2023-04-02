import {
  Model,
  models,
  Schema,
  model,
  UpdateQuery,
  isValidObjectId,
} from 'mongoose';
import CustomError from '../Errors/CustomError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  private _invalidMongo = 'Invalid mongo id';

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    try {
      return await this.model.create({ ...obj });
    } catch {
      throw new CustomError('Sorry, some error happened on our server :(', '500');
    }
  }

  public async getAll(): Promise<T[]> {
    const documents = await this.model.find();
    return documents;
  }

  public async getById(id: string): Promise<T> {
    if (!isValidObjectId(id)) throw new CustomError(this._invalidMongo, '422');
    const document = await this.model.findById(id);
    if (!document) throw new CustomError(`${this.modelName} not found`, '404');
    return document;
  }

  public async updateById(id: string, obj: T): Promise<T> {
    if (!isValidObjectId(id)) throw new CustomError(this._invalidMongo, '422');

    const newDocument = await this.model.findByIdAndUpdate(
      { _id: id },
      obj as UpdateQuery<T>,
      { new: true },
    );
    if (!newDocument) throw new CustomError(`${this.modelName} not found`, '404');
    return newDocument;
  }

  public async deleteById(id: string):Promise<void> {
    if (!isValidObjectId(id)) throw new CustomError(this._invalidMongo, '422');
    const deletedDocument = await this.model.findByIdAndDelete(id);
    if (!deletedDocument) throw new CustomError(`${this.modelName} not found`, '404');
  }
}

export default AbstractODM;
