import { Router } from "express";

import {createNewRegSacrificioPollo, editarRegSacrificioPolloId, eliminarRegSacrificioPolloId, getTotalRegSacrificioPollo, getRegSacrificioPollo,getRegSacrificioPolloId,getRegSacrificioPolloRef} from '../controllers/reg_sacrificio_pollo.controller';


const router =Router()

router.get('/reg_sacrificio_pollo', getRegSacrificioPollo);

router.post('/reg_sacrificio_pollo', createNewRegSacrificioPollo);

router.get('/reg_sacrificio_pollo/count', getTotalRegSacrificioPollo);

router.get('/reg_sacrificio_pollo/:id', getRegSacrificioPolloId);

router.delete('/reg_sacrificio_pollo/:id', eliminarRegSacrificioPolloId );

router.put('/reg_sacrificio_pollo/:id', editarRegSacrificioPolloId );

router.get('/reg_sacrificio_pollo/ref/:id_ref', getRegSacrificioPolloRef);

export default router