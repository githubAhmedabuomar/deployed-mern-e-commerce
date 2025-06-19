import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoUrl);
    console.log(`connected successfully to ${process.env.mongoUrl}`);
  } catch (err) {
    console.log(`${err} error in mongodb connection`);
  }
};
export default connectDb;
