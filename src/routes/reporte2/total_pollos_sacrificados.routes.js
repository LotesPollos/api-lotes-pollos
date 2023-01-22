import { Router } from "express";
import { getTotalPollosSacrificados } from "../../controllers/reporte2/total_pollos_sacrificados.controller";

const router =Router()

router.get('/total_pollos_sacrificados/:year', getTotalPollosSacrificados)

export default router 