//pages/api/register.js

import User from "../../models/User";
import { dbConnect } from "../../lib/mongodb";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    try {
      const savedUser = await newUser.save();
      //console.log(savedUser);
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ error: "Email already exists" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
