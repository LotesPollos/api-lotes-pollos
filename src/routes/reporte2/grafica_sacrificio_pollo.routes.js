import { Router } from "express";
import { getGraficaSacrificioPollo } from "../../controllers/reporte2/grafica_sacrificio_pollo.controller";

const router =Router()

router.get('/grafica_sacrificio_pollo/:year', getGraficaSacrificioPollo)

export default router 