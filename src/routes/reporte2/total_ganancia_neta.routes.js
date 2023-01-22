import { Router } from "express";
import { getTotalGananciaNeta } from "../../controllers/reporte2/total_ganancia_neta.controller";

const router =Router()

router.get('/total_ganancia_neta/:year', getTotalGananciaNeta)

export default router 