// dbConnect.js
import mongoose from "mongoose";

let isConnected = false; 

const connectToDb = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(
      "mongodb+srv://mainUser:Mamoon592@cluster0.sgyfjmr.mongodb.net/CHECK?retryWrites=true&w=majority&appName=Cluster0"
    );
    isConnected = true;
    console.log("✅ MongoDB is Connected");
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("❌ DB Connection Failed:", errorMessage);
    throw new Error(errorMessage);
  }
};

export default connectToDb;