import { MongoClient } from "mongodb";
import { MONGODB_URI } from "../config.mjs";
import mongoose, { mongo } from "mongoose";

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!MONGODB_URI) {
  throw new Error("Please add the MONGODB_URI to your environment variables.");
}

if (!client) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

clientPromise
  .then(async (client) => {
    console.log("Database connection successful.");

    // Log database collections and their contents
    const db = client.db();
    const collections = await db.listCollections().toArray();
    //console.log("Collections:", collections);

    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const collection = db.collection(collectionName);
      const documents = await collection.find({}).toArray();
      //console.log(`Documents in "${collectionName}":`, documents);
    }
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI);
};

export default clientPromise;
export { dbConnect };
