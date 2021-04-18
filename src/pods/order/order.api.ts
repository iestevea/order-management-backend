import { Router } from 'express';
const bp = require('body-parser')
import { getOrder, getOrderList } from 'dals/order';
import { mapOrderListFromModelToApi, mapOrderFromModelToApi } from './order.mappers';

export const orderApi = Router();

const jsonParser = bp.json()

orderApi.get('/', async (req, res) => {
  try {
    const OrderList = await getOrderList();
    res.send(mapOrderListFromModelToApi(OrderList));
  } catch (error) {
    res.sendStatus(400);
  }
});

orderApi.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);
    res.send(mapOrderFromModelToApi(order));
  } catch (error) {
    res.status(404)
    res.send({ error: "Order doesn't exist!" })
  }
})

orderApi.put("/:id", jsonParser, async (req, res) => {
  try {
    const id = req.params.id;
    const order = await getOrder(id);
    console.log(req.body);
    if (req.body.lines) {
      order.lines = req.body.lines
    }
    if (req.body.date) {
      order.date = req.body.date
    }
    if (req.body.client) {
      order.client = req.body.client
    }
    await (order as any).save()
    res.send(order);
  } catch (error) {
    res.status(404)
    res.send({ error: "Order doesn't exist!" })
  }
})
