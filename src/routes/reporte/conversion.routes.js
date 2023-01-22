import { Router } from "express";
import { getConversion } from "../../controllers/reporte/conversion.controller";

const router =Router()

router.get('/conversion/:id', getConversion)

export default router 