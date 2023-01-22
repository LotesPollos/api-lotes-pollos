import { Router } from "express";
import { getRegProduccionAlimentos } from "../../controllers/reporte/reg_produccion_alimentos.controller";

const router =Router()

router.get('/reg_produccion_alimentos/:id', getRegProduccionAlimentos)

export default router 