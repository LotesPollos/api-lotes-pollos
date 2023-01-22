import { Router } from "express";
import { getTotalVenta } from "../../controllers/reporte2/total_venta.controller";

const router =Router()

router.get('/total_venta/:year', getTotalVenta)

export default router 