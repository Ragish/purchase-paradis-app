// pages/api/latest-products.js
import nextConnect from "next-connect";
import clientPromise from "../../lib/mongodb";

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Fetch the products from the database
    const products = await db.collection("products").find({}).toArray();

    res.json(products);
  } catch (error) {
    console.error("Error fetching products from the database:", error);
    res.status(500).json({ error: error.message });
  }
});

export default handler;
