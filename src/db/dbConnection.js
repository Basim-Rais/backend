import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log(`DB is connected !! Host : ${connectionDB.connection.host}`);
        
    } catch (error) {
        console.log("ERROR failed : ", error);
        process.exit(1);
    }
}

export default connectDB;