import { Router } from 'express';
import { getOrderList } from 'dals/order';
import { mapOrderListFromModelToApi } from './order.mappers';

export const orderApi = Router();

orderApi.get('/', async (req, res) => {
  try {
    const OrderList = await getOrderList();
    res.send(mapOrderListFromModelToApi(OrderList));
  } catch (error) {
    res.sendStatus(400);
  }
});
