import { Router } from "express";
import { getGastoProduccion } from "../../controllers/reporte/gasto_produccion.controller";

const router =Router()

router.get('/gasto_produccion/:id', getGastoProduccion)

export default router 