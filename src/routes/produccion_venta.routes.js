import { Router } from "express";

import {createNewProduccionVenta, editarProduccionVentaId, eliminarProduccionVentaId, getTotalProduccionVenta, getProduccionVenta,getProduccionVentaId} from '../controllers/produccion_venta.controller';

const router =Router()

router.get('/produccion_venta', getProduccionVenta);

router.post('/produccion_venta', createNewProduccionVenta);

router.get('/produccion_venta/count', getTotalProduccionVenta );

router.get('/produccion_venta/:id', getProduccionVentaId);

router.delete('/produccion_venta/:id', eliminarProduccionVentaId );

router.put('/produccion_venta/:id', editarProduccionVentaId );

export default router