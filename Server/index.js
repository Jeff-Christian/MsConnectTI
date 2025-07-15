import connectDB from "./db.js";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();


//database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Ouvindo a porta ${port}...`))