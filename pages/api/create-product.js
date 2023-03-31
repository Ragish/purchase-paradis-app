// pages/api/create-product.js
import nextConnect from "next-connect";
import clientPromise from "../../lib/mongodb";

const handler = nextConnect();

handler.post(async (req, res) => {
  const client = await clientPromise;
  const db = client.db();
  const newProduct = JSON.parse(req.body);
  const result = await db.collection("products").insertOne(newProduct);
  res.status(201).json(result.ops[0]);
});

export default handler;
