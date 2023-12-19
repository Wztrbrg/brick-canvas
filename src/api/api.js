import axios from "axios";
const url = "http://localhost:3001";
export const getOrders = () => axios.get(url + "/orders");
export const createOrder = (order) => axios.post(url + "/orders", order);
