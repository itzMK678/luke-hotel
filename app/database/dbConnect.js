const mongoose = require("mongoose");
const connectToDb= async()=>{
    try{
   await mongoose.connect("mongodb+srv://mainUser:Mamoon592@cluster0.sgyfjmr.mongodb.net/CHECK?retryWrites=true&w=majority&appName=Cluster0", {
   
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connected");
  }catch (err) {
  const errorMessage = err instanceof Error ? err.message : String(err);
  console.error("❌ DB Connection Failed:", errorMessage);
}}
module.exports = connectToDb;