import { Router } from "express";
import { getGraficaMortalidad } from "../../controllers/reporte2/grafica_mortalidad.controller";

const router =Router()

router.get('/grafica_mortalidad/:year', getGraficaMortalidad)

export default router 