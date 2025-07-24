import jwt from 'jsonwebtoken';

const userAuthentication = async (req, res, next) => {

    const {token} = req.cookies;

    if(!token){
        return res.json({
            success: false,
            message: 'Usuário não autorizado, tente logar novamente'
        })
    }

    try {

        const tokenDecode = jwt.verify(
            token,
            process.env.JWTPRIVATEKEY
        )

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({
                success: false, 
                message: 'Usuário não autorizado, tente logar novamente'
            })
        }

        next();

    } catch (error){
        res.json({
            success: false,
            message: error.message
        })
    }

}

export default userAuthentication;