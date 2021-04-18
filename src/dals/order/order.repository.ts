import { Order } from './order.model';
import { OrderContext } from './order.context';

export const getOrderList = async (): Promise<Order[]> =>
  await OrderContext.find().select({
    _id: 1,
    lines: 1,
    date: 1,
    client: 1,
  })
    .lean();

export const getOrder = async (id: string): Promise<Order> =>
  await OrderContext.findOne({ _id: id })

export const insertOrderList = async (OrderList: Order[]) =>
  await OrderContext.insertMany(OrderList);
