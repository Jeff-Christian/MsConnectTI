import connectDB from "./db.js";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

import authRouter from "./routes/auth.js";

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

// Endpoints
app.get('/', (req,res) => res.send("API FUNCIONANDO"));
app.use('/api/auth', authRouter);

app.listen(port, () => console.log(`Ouvindo a porta ${port}...`));