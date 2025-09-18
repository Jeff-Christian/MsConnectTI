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
    id: {
        type: String, 
        required: true, 
        unique: true
    },
    perifericos: [PeripheralSchema],
    tickets: [{
        type: String
    }]
}, {
    timestamps: true
})

export default mongoose.model(
    "Pc", 
    PcSchema
)