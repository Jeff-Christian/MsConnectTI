import express from "express";
import {
    getPcs,
    createPc,
    updatePc,
    deletePc
} from "../controllers/pcController.js";

const router = express.Router();

router.get("/", getPcs);      
router.post("/", createPc);    
router.put("/:id", updatePc);   
router.delete("/:id", deletePc); 

export default router;