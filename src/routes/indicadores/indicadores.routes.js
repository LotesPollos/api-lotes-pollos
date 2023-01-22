import { Router } from "express";
import {getIndicadorSacrificio,getIndicadorMortalidad,getIndicadorPollosVendidos} from '..//../controllers/indicadores/indicadores.controller'
const router =Router()

router.get('/indicador/sacrificio/:id', getIndicadorSacrificio );
router.get('/indicador/mortalidad/:id', getIndicadorMortalidad );
router.get('/indicador/vendidos/:id', getIndicadorPollosVendidos );
export default router