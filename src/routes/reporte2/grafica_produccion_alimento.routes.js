import { Router } from "express";
import { getGraficaProduccionAlimento } from "../../controllers/reporte2/grafica_produccion_alimento.controller";

const router =Router()

router.get('/grafica_produccion_alimento/:year', getGraficaProduccionAlimento)

export default router 