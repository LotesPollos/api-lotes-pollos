import { Router } from "express";
import { getTotalGastos } from "../../controllers/reporte2/total_gastos.controller";

const router =Router()

router.get('/total_gastos/:year', getTotalGastos)

export default router 