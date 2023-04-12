//pages/api/register.js

import User from "../../models/user";
import { dbConnect } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();

      const { name, email, password } = req.body;

      const user = await User.create({ name, email, password });

      res.status(201).json({ user });
    } catch (error) {
      console.error("Error:", error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the user." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
