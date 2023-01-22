import { Router } from "express";

import {getFechaLotesProduccion,createNewLoteProduccion, editarLoteProduccionId, eliminarLoteProduccionId, getTotalLoteProduccion, getLoteProduccion,getLoteProduccionId,terminarLote,getLoteProduccionRef} from '../controllers/lote_produccion.controller' 


const router =Router()

router.get('/lote_produccion', getLoteProduccion)

router.post('/lote_produccion',createNewLoteProduccion )

router.get('/lote_produccion/count', getTotalLoteProduccion )

router.get('/lote_produccion/:id', getLoteProduccionId)

router.delete('/lote_produccion/:id', eliminarLoteProduccionId )

router.put('/lote_produccion/:id', editarLoteProduccionId ); 

router.put('/lote_produccion/terminar/:id', terminarLote );

router.get('/lote_produccion/ref/:id_ref', getLoteProduccionRef);

router.get('/lote_produccion/fechaP/:id', getFechaLotesProduccion)

export default router