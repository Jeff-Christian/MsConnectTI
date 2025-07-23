import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../modules/userModel.js';

// caso posteriormente criar tela de register
export const Register = async (req, res) => {
    const {
        name, 
        email,
        password
    } = req.body;

    if(!name || !email || !password){
        return res.json({
            success: false,
            message: 'Alguns detalhes estão faltando'
        })
    }

    try{
        const existingUser = await userModel.findOne({email});

        if(existingUser){
            return res.json({
                success: false, 
                message: "Usuário já existe"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //usando o modelo de usuário pra instanciar
        const user = new userModel({
            name,
            email, 
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({
            id: user._id
        }, 
            process.env.JWTPRIVATEKEY,

            {expiresIn: '7d'}
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.json({
        success: true
        })


    } catch (error){
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Controller de Login
export const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    if(!email || !password){
        return res.json({
            success: false, 
            message: 'Email e Senhas são obrigatórias'
        })
    }

    try{

        const user = await userModel.findOne({
            email   
        })

        if(!user){
            return res.json({
                success: false, 
                message: "Email Inválido"
            })
        }

        const isMatch = await bcrypt.compare(
            password, 
            user.password
        );

        if(!isMatch){
            return res.json({
                success: false,
                message: "Senha Inválida"
            })
        }

        const token = jwt.sign({
            id: user._id
        }, 
            process.env.JWTPRIVATEKEY,

            {expiresIn: '7d'}
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.json({
            success: true
        })

    } catch (error) {
        console.error(error);
    }
}

// controller de LogOut
export const logout = async (req, res) => {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
        })

        return res.json({
            success: true,
            message: "Deslogado"
        })

    } catch (error){
        return res.json({
            success: false,
            message: error.message
        });
    }
}