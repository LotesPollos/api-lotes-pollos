import { Router } from "express";
import { getGastoVentas } from "../../controllers/reporte/gasto_ventas.controller";

const router =Router()

router.get('/gasto_ventas/:id', getGastoVentas)

export default router 