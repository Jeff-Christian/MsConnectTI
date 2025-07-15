import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
    const connectionParams = {

    };

    try{
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.DB, connectionParams)
    console.log("Conectado com sucesso a database!");
    } catch (error){
        console.log(error);
        console.log("Não foi possível conectar a database!");
    }
};

export default connectDB;