import * as model from 'dals/order/order.model';
import * as apiModel from './order.api-model';

export const mapOrderFromModelToApi = (Order: model.Order): apiModel.Order => ({
  id: Order._id,
  client: Order.client,
  date: Order.date,
  lines: Order.lines
});

export const mapOrderListFromModelToApi = (
  OrderList: model.Order[]
): apiModel.Order[] => OrderList.map(mapOrderFromModelToApi);
