import pcModel from "../modules/pcModel.js";


// Listar os Pcs cadastrados
export const getPcs = async (req, res) => {
    try{
        const pcs = await pcModel.find();
        res.json(pcs);
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// Criar um novo Pc 
export const createPc = async (req, res) => {
    try {
        
        const pc = new Pc(req.body);
        await pc.save();
        res.status(201).json(pc)

    } catch (error) {
        
        res.status(400).json({
            success: false, 
            message: error.message
        })

    }
}

// Uptade informações de cada Pc
export const updatePc = async (req, res) => {
    try {

        const {
            id
        } = req.params;

        const pc = await pcModel.findByIdAndUpdate(
            id, 
            req.body,
            { new: true}
        );

        if(!pc) return res.status(404).json({
            success: false, 
            message: "Pc não encontrado"
        });

        res.json(pc)
        
    } catch (error) {
        res.status(400).json({
            success: false, 
            message: error.message
        })
    }
}

// Deletar pc da lista
export const deletePc = async (req, res) => {
    try {

        const {
            id
        } = req.params;
        const pc = await pcModel.findByIdAndDelete(id);
        if(!pc) return res.status(404).json({
            success: false, 
            message: "Pc removido com sucesso"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: error.message
        })
    }
}