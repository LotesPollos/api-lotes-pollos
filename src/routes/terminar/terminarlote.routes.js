import { Router } from "express";

import {getConsultarLoteTerminar,getConsultarLoteVentasTerminar,getConsultarLoteVentasProduccion} from '..//../controllers/loteterminado/loteterminado.controller'

const router =Router()

router.get('/consultar_lote_terminar/:id_ref_lote',getConsultarLoteTerminar); 

router.get('/consultar_lote_venta_terminar/:id_ref_lote',getConsultarLoteVentasTerminar); 

router.get('/consultar_lote_venta_produccion/:id_ref_lote',getConsultarLoteVentasProduccion); 

export default router 