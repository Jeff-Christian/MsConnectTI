import express from 'express';
import { 
    isAuthenticated, 
    Register,
    login, 
    logout, 
} from '../controllers/authController.js';
import userAuthentication from '../middleware/userAuth.js';

const authRouter = express.Router();

authRouter.post('/register', Register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.get('/isAuth', userAuthentication, isAuthenticated);

export default authRouter;