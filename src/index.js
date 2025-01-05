import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
console.log(process.env)
import connectDB from './db/db.js';
import app from './App.js';
connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Mongo DB connection error",err)
})






// import express from "express";
// const app = express();

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//         app.on("error", (err) => {
//             console.log(err);
//             throw new Error(err);
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port: ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };