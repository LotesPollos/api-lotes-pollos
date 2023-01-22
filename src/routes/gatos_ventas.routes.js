import { Router } from "express";

import {createNewGastosVentas, editarGastosVentasId, eliminarGastosVentasId, getTotalGastosVentas, getGastosVentas,getGastosVentasId,getLoteGastosVentasRef} from '../controllers/gastos_ventas.controller' 

const router =Router()

router.get('/gastos_ventas', getGastosVentas)

router.post('/gastos_ventas',createNewGastosVentas )

router.get('/gastos_ventas/count', getTotalGastosVentas)

router.get('/gastos_ventas/:id', getGastosVentasId)

router.delete('/gastos_ventas/:id', eliminarGastosVentasId )

router.put('/gastos_ventas/:id', editarGastosVentasId );

router.get('/gastos_ventas/ref/:id_ref', getLoteGastosVentasRef)

export default router