import axios from "axios";
const url = "http://localhost:3001";
export const getOrders = () => axios.get(url + "/orders");
export const createOrder = (orderItem) =>
  axios.post(url + "/orders", orderItem);
