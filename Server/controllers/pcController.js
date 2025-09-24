import Pc from "../modules/pcModel.js";

// Listar os Pcs cadastrados
export const getPcs = async (req, res) => {
  try {
    const pcs = await Pc.find();
    res.json(pcs);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Criar um novo Pc 
export const createPc = async (req, res) => {
  try {
    console.log("BODY RECEBIDO NO BACKEND:", req.body);
    const newPc = new Pc(req.body);
    await newPc.save();
    res.status(201).json(newPc);
  } catch (error) {
    console.error("Erro ao criar PC:", error);
    res.status(400).json({ message: "Erro ao criar PC", error: error.message });
  }
};

// Update informações de cada Pc
export const updatePc = async (req, res) => {
  try {
    const { id } = req.params;
    const pc = await Pc.findByIdAndUpdate(id, req.body, { new: true });

    if (!pc)
      return res.status(404).json({
        success: false,
        message: "Pc não encontrado"
      });

    res.json(pc);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Deletar pc da lista
export const deletePc = async (req, res) => {
  try {
    const { id } = req.params;
    const pc = await Pc.findByIdAndDelete(id);

    if (!pc)
      return res.status(404).json({
        success: false,
        message: "Pc não encontrado"
      });

    res.json({ success: true, message: "Pc removido com sucesso" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};