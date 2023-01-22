import { Router } from "express";

import {createNewRegProduccionMortalidad, editarRegProduccionMortalidadId, eliminarRegProduccionMortalidadId, getTotalRegProduccionMortalidad, getRegProduccionMortalidad,getRegProduccionMortalidadId,getRegProduccionMortalidadRef} from '../controllers/reg_produccion_mortalidad.controller';


const router =Router()

router.get('/reg_produccion_mortalidad', getRegProduccionMortalidad);

router.post('/reg_produccion_mortalidad', createNewRegProduccionMortalidad);

router.get('/reg_produccion_mortalidad/count', getTotalRegProduccionMortalidad);

router.get('/reg_produccion_mortalidad/:id', getRegProduccionMortalidadId);

router.delete('/reg_produccion_mortalidad/:id', eliminarRegProduccionMortalidadId );

router.put('/reg_produccion_mortalidad/:id', editarRegProduccionMortalidadId );

router.get('/reg_produccion_mortalidad/ref/:id_ref', getRegProduccionMortalidadRef);

export default router