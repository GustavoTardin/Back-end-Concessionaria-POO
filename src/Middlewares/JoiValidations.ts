import Joi from 'joi';
import CustomError from '../Errors/CustomError';

class JoiValidation {
  private _carSchema;

  constructor() {
    const carSchema = Joi.object({
      model: Joi.string().required(),
      year: Joi.number().min(1886).required(),
      color: Joi.string().required(),
      status: Joi.boolean(),
      buyValue: Joi.number().required(),
      doorsQty: Joi.number().required(),
      seatsQty: Joi.number().required(),
    });
    this._carSchema = carSchema;
  }

  validateCar(car: unknown) {
    const { error } = this._carSchema.validate(car);
    if (error) throw new CustomError(error.message, '400');
  }
}

export default JoiValidation;
