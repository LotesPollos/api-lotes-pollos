import { Router } from "express";
import { getLoteVentaRegistro } from "../../controllers/reporte/lote_venta_registro.controller";

const router =Router()

router.get('/lote_venta_registro/:id', getLoteVentaRegistro)

export default router 