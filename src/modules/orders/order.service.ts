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

const searchOrders = async (email: string) => {
  const regex = new RegExp(email, "i"); // Case-insensitive search
  const result = await OrderModel.find({
    $or: [
      { email: { $regex: regex } },
      // Add more fields as needed
    ],
  });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrderFromDB,
  searchOrders,
};
