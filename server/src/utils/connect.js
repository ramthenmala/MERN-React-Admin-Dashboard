import express from 'express';
import mongoose from "mongoose";
// DATA
import User from "../models/User.js";
import { dataUser  } from '../data/index.js';

const app = express();

const connectMongoDB = async (PORT) => {
    mongoose.set("strictQuery", false);
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        app.listen(PORT, async () => {
            console.log(`http://localhost:${PORT}`)
        });
        User.insertMany(dataUser)
    } catch (error) {
        console.log(`${error} did not connect`)
        process.exit(1)
    }
}

export default connectMongoDB;