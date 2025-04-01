import express from 'express';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors([]));

app.use("/auth", authRoutes);
app.use("/api", uploadRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})