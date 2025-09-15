import express from 'express';
import jwt from "jsonwebtoken";
import userModel from '../modules/userModel.js';

import { 
    isAuthenticated, 
    Register,
    login, 
    logout, 
} from '../controllers/authController.js';
import userAuthentication from '../middleware/userAuth.js';

const authRouter = express.Router();

router.post("/login", async (req, res) => {
    const {
        email, 
        password
    } = req.body;

    try {
        const user = await userModel.findOne({
            email
        })
        if(!user) return res.status(404).json({
            error: "Usuário não encontrado"
        })
        if(password !== user.password){
            return res.status(401).json({
                error: "Senha incorreta"
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            }, 
            process.env.JWTPRIVATEKEY,
            {
                expiresIn: "1h"
            }
        )

        res.json({
            token, 
            user
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.post("/logout", (req, res) => {
    res.json({
        message: "Logout realizado"
    })
})

authRouter.post('/register', Register);
authRouter.get('/isAuth', userAuthentication, isAuthenticated);

export default authRouter;