import { MongoClient } from "mongodb";

async function deleteProductsByName(productName) {
  const uri =
    "mongodb+srv://Sumitra012:Sumitra012@facebook-clone.mbsybuk.mongodb.net/purchase_paradise?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("purchase_paradise"); // Replace with your database name
    const collection = database.collection("products"); // Replace with your collection name

    const result = await collection.deleteMany({ name: productName });

    if (result.deletedCount > 0) {
      console.log(
        `Successfully deleted ${result.deletedCount} products with name: ${productName}`
      );
    } else {
      console.log(`No products found with name: ${productName}`);
    }
  } catch (error) {
    console.error("Error occurred while deleting the products:", error);
  } finally {
    await client.close();
  }
}

const productNameToDelete = "Product 1";
deleteProductsByName(productNameToDelete);
