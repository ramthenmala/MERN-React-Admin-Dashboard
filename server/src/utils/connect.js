import mongoose from "mongoose";

const connectMongoDB = async (PORT) => {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(`${error} did not connect`)
        process.exit(1)
    }
}

export default connectMongoDB;