import { Router } from "express";
import { getGraficaGastosMes } from "../../controllers/reporte2/grafica_gastos_mes.controller";

const router =Router()

router.get('/grafica_gastos_mes/:year', getGraficaGastosMes)

export default router 