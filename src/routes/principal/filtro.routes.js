import { Router } from "express";

import {getFiltroEstado, getFiltroIdLote,getFiltroFsacrificio,getFiltroFentrada} from '..//../controllers/filtros/principal.controller'

const router =Router()

router.get('/filtro_estado/:estado', getFiltroEstado ); 
router.get('/filtro_estado/id/:id_lote/:estado', getFiltroIdLote); 
router.get('/filtro_estado/sacrificio/:sacrificio/:estado', getFiltroFsacrificio ); 
router.get('/filtro_estado/entrada/:entrada/:estado',getFiltroFentrada  ); 

export default router