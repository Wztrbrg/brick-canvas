import axios from "axios";
const url = "http://localhost:3001/orders";
export const getOrders = () => axios.get(url);
export const createOrder = (order) => axios.post(url, order);
