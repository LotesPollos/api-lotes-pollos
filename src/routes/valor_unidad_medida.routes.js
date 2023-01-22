import { Router } from "express";

import {createNewValorUnidadMedida, editarValorUnidadMedidaId, eliminarValorUnidadMedidaId, getTotalValorUnidadMedida, getValorUnidadMedida,getValorUnidadMedidaId} from '../controllers/valor_unidad_medida.controller' 


const router =Router()

router.get('/valor_unidad_medida', getValorUnidadMedida)

router.post('/valor_unidad_medida',createNewValorUnidadMedida )

router.get('/valor_unidad_medida/count', getTotalValorUnidadMedida )

router.get('/valor_unidad_medida/:id', getValorUnidadMedidaId)

router.delete('/valor_unidad_medida/:id', eliminarValorUnidadMedidaId )

router.put('/valor_unidad_medida/:id', editarValorUnidadMedidaId ); 

export default router
