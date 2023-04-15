import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.models.CartItem ||
  mongoose.model("CartItem", cartItemSchema);
