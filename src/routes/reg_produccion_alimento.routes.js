import { Router } from "express";

import {createNewRegProduccionAlimento, editarRegProduccionAlimentoId, eliminarRegProduccionAlimentoId, getTotalRegProduccionAlimento, getRegProduccionAlimento,getRegProduccionAlimentoId,getRegProduccionAlimentoRef} from '../controllers/reg_produccion_alimento.controller';

const router =Router()

router.get('/reg_produccion_alimento', getRegProduccionAlimento);

router.post('/reg_produccion_alimento', createNewRegProduccionAlimento);

router.get('/reg_produccion_alimento/count', getTotalRegProduccionAlimento );

router.get('/reg_produccion_alimento/:id', getRegProduccionAlimentoId);

router.delete('/reg_produccion_alimento/:id', eliminarRegProduccionAlimentoId );

router.put('/reg_produccion_alimento/:id', editarRegProduccionAlimentoId );

router.get('/reg_produccion_alimento/ref/:id_ref', getRegProduccionAlimentoRef);

export default router