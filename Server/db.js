import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
    await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado com sucesso a database!");
    } catch (error){
        console.log(error);
        console.log("Não foi possível conectar a database!");
    }
};

export default connectDB;