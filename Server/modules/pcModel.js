import mongoose from "mongoose";

const PeripheralSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {
        type: String,
        enum: ["ativo", "inativo", "desabilitado"],
        default: "ativo"
    }
})

const PcSchema = new mongoose.Schema({
    pcId: {
        type: String, 
        required: true, 
    },
    status: {
        type: String,
        enum: ["ativo", "inativo", "desmontado"], 
        default: "ativo" 
    },
    perifericos: [PeripheralSchema],
    tickets: { 
        type: [String], 
        default: [] 
    }
}, {
    timestamps: true
})

export default mongoose.model(
    "Pc", 
    PcSchema
)