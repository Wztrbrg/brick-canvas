import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    image: String,
  },
  { timestamps: true },
  { collection: "orders" }
);

const Item = mongoose.model("order", itemSchema);

export default Item;