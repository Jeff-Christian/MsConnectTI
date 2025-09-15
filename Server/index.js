import connectDB from "./db.js";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

// Routes
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";

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

app.listen(port, () => console.log(`Ouvindo a porta ${port}...`));

app.get('/api/user/data', (req, res) => {
  res.send('Rota funciona');
});

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