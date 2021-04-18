import { disconnect, Types } from 'mongoose';
import { connectToDB } from '../src/core/database';
import { envConstants } from '../src/core/constants';
import { insertOrderList, Order } from 'dals/order';

const devOrderList: Order[] = [
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 1",
    date: "22/03/2019",
    lines: [
      {
        id: "1",
        price: 263,
        status: "invalid"
      },
      {
        id: "2",
        price: 20,
        status: "invalid"
      },
      {
        id: "3",
        price: 5043,
        status: "invalid"
      }
    ]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 2", date: "12/07/2009",
    lines: [
      { id: "1", price: 290, status: "invalid" },
      { id: "2", price: 250, status: "valid" },
      { id: "3", price: 10, status: "valid" },
      { id: "4", price: 200, status: "valid" }
    ]
  },
];

const prodOrderList: Order[] = [
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 1",
    date: "22/03/2019",
    lines: [
      {
        id: "1",
        price: 263,
        status: "invalid"
      },
      {
        id: "2",
        price: 20,
        status: "invalid"
      },
      {
        id: "3",
        price: 5043,
        status: "invalid"
      }
    ]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 2", date: "12/07/2009",
    lines: [
      { id: "1", price: 290, status: "invalid" },
      { id: "2", price: 250, status: "valid" },
      { id: "3", price: 10, status: "valid" },
      { id: "4", price: 200, status: "valid" }
    ]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 4", date: "19/08/2011", lines: [{ id: "1", price: 200, status: "valid" }]
  },
  {
    _id: new Types.ObjectId().toHexString(),
    client: "Client 3", date: "02/05/2017", lines: [{ id: "1", price: 29000, status: "valid" }, { id: "2", price: 1000, status: "valid" }]
  },
];

export const run = async () => {
  await connectToDB(envConstants.MONGODB_URI);

  const orderList = envConstants.isProduction ? prodOrderList : devOrderList;

  await insertOrderList(orderList);

  await disconnect();
};

run();
