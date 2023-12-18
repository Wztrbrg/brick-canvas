import Item from "../models/items.js";
export const getItems = async (req, res) => {
  try {
    const item = await Item.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {}
};
