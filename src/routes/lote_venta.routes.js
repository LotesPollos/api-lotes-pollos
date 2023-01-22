import { Router } from "express";

import {getFechaLotesVentas,createNewLoteVenta, editarLoteVentaId, eliminarLoteVentaId, getTotalLoteVenta, getLoteVenta,getLoteVentaId,getLoteVentaRef} from '../controllers/lote_venta.controller' 


const router =Router()

router.get('/lote_venta', getLoteVenta)

router.post('/lote_venta',createNewLoteVenta )

router.get('/lote_venta/count', getTotalLoteVenta )

router.get('/lote_venta/:id', getLoteVentaId)

router.delete('/lote_venta/:id', eliminarLoteVentaId )

router.put('/lote_venta/:id', editarLoteVentaId ); 

router.get('/lote_venta/ref/:id_ref', getLoteVentaRef);

router.get('/lote_venta/fechaV/:id', getFechaLotesVentas)

export default router