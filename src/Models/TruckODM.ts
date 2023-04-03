import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import ITruck from '../Interfaces/ITruck';

class TruckODM extends AbstractODM<ITruck> {
  constructor() {
    const schema = new Schema<ITruck>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, default: false },
      buyValue: { type: Number, required: true },
      weight: { type: Number, require: true },
      loadingCapacity: { type: Number, required: true },
      type: { type: String, required: true },
    });
    super(schema, 'Truck');
  }
}

export default TruckODM;