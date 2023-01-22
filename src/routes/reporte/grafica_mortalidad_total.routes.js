import { Router } from "express";
import { getGraficaMortalididadTotal } from "../../controllers/reporte/grafica_mortalidad_total.controller";

const router =Router()

router.get('/grafica_mortalidad_total/:id', getGraficaMortalididadTotal)

export default router 