import express from 'express';
import jwt from "jsonwebtoken";
import userModel from '../modules/userModel.js';
import {
  login, 
  Register,
  logout, 
  isAuthenticated
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Usuário não encontrado"
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        error: "Senha incorreta"
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWTPRIVATEKEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login realizado com sucesso",
      token,
      user
    });

  } catch (error) {
    console.error("Erro no Login:", error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


router.post("/logout", (req, res) => {
    res.json({
        message: "Logout realizado"
    })
})

export default router;