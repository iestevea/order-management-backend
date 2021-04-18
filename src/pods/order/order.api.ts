import { Router } from 'express';
import { getOrder, getOrderList } from 'dals/order';
import { mapOrderListFromModelToApi, mapOrderFromModelToApi } from './order.mappers';

export const orderApi = Router();

orderApi.get('/', async (req, res) => {
  try {
    const OrderList = await getOrderList();
    res.send(mapOrderListFromModelToApi(OrderList));
  } catch (error) {
    res.sendStatus(400);
  }
});

orderApi.get("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);
    res.send(mapOrderFromModelToApi(order));
  } catch (error) {
    res.status(404)
    res.send({ error: "Order doesn't exist!" })
  }
})
