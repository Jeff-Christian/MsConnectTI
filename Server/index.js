import connectDB from "./db.js";
import dotenv from 'dotenv';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

// Routes
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import pcRoutes from "./routes/pcRoutes.js";

// Model
import userModel from "./modules/userModel.js";

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
app.use('/api/user', userRouter);

// Pcs Listados
app.use("/api/pcs", pcRoutes);

app.listen(port, () => console.log(`Ouvindo a porta ${port}...`));

app.get('/api/user/data', (req, res) => {
  res.send('Rota funciona');
});

// Conectar com o Atlas
mongoose.connect(
  process.env.DB
).then(
  () => console.log("Conectado ao Atlas")
).catch(
  (err) => console.error("Erro ao conectar:", err)
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.post('/api/auth/login', (req, res) => {
  const {
    email,
    password
  } = req.body;

  userModel.findOne({email: email}).then(
    user => {
      if(user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("A senha está incorreta")
        }
      } else {
        res.json("Usuário não encontrado")
      }
    }
  );

})