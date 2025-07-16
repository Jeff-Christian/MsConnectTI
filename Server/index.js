import connectDB from "./db.js";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieParser());

//database connection
connectDB();

// starting backend
// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080;

app.get('/', (req,res) => res.send("API FUNCIONANDO"));

app.listen(port, () => console.log(`Ouvindo a porta ${port}...`));