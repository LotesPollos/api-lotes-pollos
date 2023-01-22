import { Router } from "express";

import {getTablaLoteVentasRegistro,createNewLoteVentasRegistro, editarLoteVentasRegistroId, eliminarLoteVentasRegistroId, getTotalLoteVentasRegistro, getLoteVentasRegistro,getLoteVentasRegistroId,getLoteVentasRegistroRef} from '../controllers/lote_ventas_registro.controller' 


const router =Router()

router.get('/lote_ventas_registro', getLoteVentasRegistro)

router.post('/lote_ventas_registro',createNewLoteVentasRegistro )

router.get('/lote_ventas_registro/count', getTotalLoteVentasRegistro )

router.get('/lote_ventas_registro/:id', getLoteVentasRegistroId)

router.delete('/lote_ventas_registro/:id', eliminarLoteVentasRegistroId )

router.put('/lote_ventas_registro/:id', editarLoteVentasRegistroId ); 

router.get('/lote_ventas_registro/ref/:id_ref', getLoteVentasRegistroRef)

router.get('/lote_ventas_registro/tabla/:id', getTablaLoteVentasRegistro)

export default router