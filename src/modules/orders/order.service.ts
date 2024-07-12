import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrderFromDB,
};
