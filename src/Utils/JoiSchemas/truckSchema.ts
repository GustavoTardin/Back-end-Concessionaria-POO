import Joi from 'joi';

const truckSchema = Joi.object({
  model: Joi.string().required(),
  year: Joi.number().required(),
  color: Joi.string().required(),
  status: Joi.boolean(),
  buyValue: Joi.number().required(),
  loadingCapacity: Joi.number().required(),
  weight: Joi.number().required(),
  type: Joi.string().valid('light', 'medium', 'heavy').required(),
});

export default truckSchema;