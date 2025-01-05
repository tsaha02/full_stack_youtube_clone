import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
console.log(process.env)
import connectDB from './db/db.js';
connectDB();






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