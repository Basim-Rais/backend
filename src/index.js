import dotenv from "dotenv"
import connectDB from "./db/dbConnection.js"

dotenv.config()

connectDB()





// (async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//        app.on("ERROR", (error) => {
//         console.log("ERROR : ", error);
//         throw error
//        })

//        app.listen(process.env.PORT, ( ) => {
//         console.log(`App is listening ${process.env.PORT}` )
//        })
//     } catch (error) {
//         console.error("ERROR : ", error);
//         throw(error)
//     }
// })()