import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    image: String,
    pieces: Array,
  },
  { timestamps: true },
  { collection: "orders" }
);

const Order = mongoose.model("order", orderSchema);

export default Order;
