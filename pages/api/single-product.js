// pages/api/single-product.js
import nextConnect from "next-connect";
import clientPromise from "../../lib/mongodb";

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();

    // Get the product name from the query parameter
    const productName = req.query.name;

    let product = [];

    // If the name is provided in the query parameter, filter products based on the name
    if (productName) {
      const regex = new RegExp(productName, "i");
      product = await db
        .collection("products")
        .find({ name: { $regex: regex } })
        .toArray();
    } else {
      // Fetch all products from the database if no name is provided
      product = await db.collection("products").find({}).toArray();
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching products from the database:", error);
    res.status(500).json({ error: error.message });
  }
});

export default handler;
