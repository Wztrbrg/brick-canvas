import OrderItem from "../models/order.js";
export const getOrders = async (req, res) => {
  try {
    const orderItem = await OrderItem.find();
    res.status(200).json(orderItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createOrder = async (req, res) => {
  const orderItem = new OrderItem(req.body);
  try {
    await orderItem.save();
    res.status(201).json(orderItem);
  } catch (error) {}
};
