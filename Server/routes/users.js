import express from 'express';

import connection from '../db.js';

import userAuthentication from '../middleware/userAuth.js';
import { getUserData } from '../controllers/userController.js';

import userModel from '../modules/userModel.js';

const app = express();
const userRouter = express.Router();

const router = express.Router();

router.post("/", async (req,res) => {
    try {

        const { name, email, password } = req.body;
        const user = new userModel({name, email, password});
        await user.save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({
            error: "Usuário não encontrado"
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        )
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.json({
            message: "Usuário deletado"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})

app.use(
    express.json()
);

app.get("/users", async (req, res) => {
    try {
        const [rows] = await connection.execute(
            "SELECT * FROM users"
        )
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

userRouter.get('/data', userAuthentication, getUserData);

export default userRouter;