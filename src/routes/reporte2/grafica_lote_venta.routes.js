import { Router } from "express";
import { getGraficaLoteVenta } from "../../controllers/reporte2/grafica_lote_venta.controller";

const router =Router()

router.get('/grafica_lote_venta/:year', getGraficaLoteVenta)

export default router 