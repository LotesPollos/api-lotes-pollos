import { Router } from "express";

import {createNewGastosProduccion, editarGastosProduccionId, eliminarGastosProduccionId, getTotalGastosProduccion, getGastosProduccion,getGastosProduccionId,getGastosProduccionRef} from '../controllers/gastos_produccion.controller' 

const router =Router()

router.get('/gastos_produccion', getGastosProduccion)

router.post('/gastos_produccion',createNewGastosProduccion )

router.get('/gastos_produccion/count', getTotalGastosProduccion )

router.get('/gastos_produccion/:id', getGastosProduccionId)

router.delete('/gastos_produccion/:id', eliminarGastosProduccionId )

router.put('/gastos_produccion/:id', editarGastosProduccionId )

router.get('/gastos_produccion/ref/:id_ref', getGastosProduccionRef)



export default router