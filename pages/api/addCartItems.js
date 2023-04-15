import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import CartItem from "../../models/CartItem";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { token, productId, quantity } = req.body;

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;

      const user = await User.findById(userId);
      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      let cartItem = await CartItem.findOne({ productId, user: userId });

      if (!cartItem) {
        cartItem = new CartItem({ productId, quantity, user: userId });
        await cartItem.save();
        user.cart.push(cartItem);
        await user.save();
      } else {
        cartItem.quantity = quantity;
        await cartItem.save();
      }

      res.status(200).json({ message: "Cart updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
