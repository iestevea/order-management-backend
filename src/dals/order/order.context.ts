import mongoose, { Document, Schema } from 'mongoose';
import { Order } from './order.model';

const OrderSchema = new Schema({
  client: { type: Schema.Types.String, required: true },
  date: { type: Schema.Types.String, required: true },
  lines: { type: Schema.Types.Array, required: true }
});

export const OrderContext = mongoose.model<Order & Document>(
  'Order',
  OrderSchema
);
