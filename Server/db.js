import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.DB)
    console.log("Conectado com sucesso a database!");
    } catch (error){
        console.log(error);
        console.log("Não foi possível conectar a database!");
    }
};

export default connectDB;