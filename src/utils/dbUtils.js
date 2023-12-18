import * as api from "../api/api.js";

//Code for storing in database
export const getItems = async () => {
  try {
    const { data } = await api.getItems();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createItem = async (image) => {
  try {
    const { data } = await api.createItem(image);
    return data;
  } catch (error) {
    console.log(error);
  }
};
