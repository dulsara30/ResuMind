import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const URI = process.env.MONGO_URI;

    try {
        const connectionString = `${URI}`;
        await mongoose.connect(connectionString);
        console.log("Mongo DB connection successful!");
    } catch (err) {
        console.log("DB connection failed!");
    }
}