import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import CartItem from "../../models/CartItem";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const { token } = req.query;

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;

      const user = await User.findById(userId).populate("cart");

      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(user.cart);
      }
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
