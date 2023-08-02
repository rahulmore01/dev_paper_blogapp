import mongoose from "mongoose";

export default function dbConfig() {
  try {
    const MONGODB_URI = process.env.MONGO_URL;
    mongoose.connect(MONGODB_URI!);
    const connection = mongoose.connection;
    // to avaid long default error in the console
    connection.on("connected", () => {
      console.log("Connected to MongoDB successfully");
    });

    connection.on("error", (err) => {
      console.log("Error connecting to MongoDB" + err);
    });
    process.exit();
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
}
