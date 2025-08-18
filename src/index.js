import dotenv from "dotenv"
import connectDB from "./db/dbConnection.js"
import express from "express"
import app from "./app.js"

dotenv.config()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 800, () => {
        console.log(` Server is Runnuing on port ${process.env.PORT}`)
    })
}) 
.catch((error) => {
    console.log("MongoDB Connection Failed !! ", error)
})
 



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