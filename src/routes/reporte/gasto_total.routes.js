import { Router } from "express";
import { getGastoTotal } from "../../controllers/reporte/gasto_total.controller";

const router =Router()

router.get('/gasto_total/:id', getGastoTotal)

export default router 