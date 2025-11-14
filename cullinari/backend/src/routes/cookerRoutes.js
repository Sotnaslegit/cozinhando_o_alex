import { Router } from 'express'
import {
    createCooker,
    listCooker,
    listCookerById,
    deleteCooker,
    updateCooker
} from '../controllers/cookerController.js';

export const cookerRouter = Router();

cookerRouter.post("/cooker", createCooker);

cookerRouter.get("/cooker", listCooker);

cookerRouter.get("/cooker/:id", listCookerById);

cookerRouter.delete("/cooker:id", deleteCooker);

cookerRouter.put("/cooker/:id", updateCooker);