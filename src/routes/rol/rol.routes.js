import { Router } from "express";

import {getEditarRol,getRol,getBuscarRol,getEliminarRol} from '..//../controllers/rol/rol.controller'

const router =Router()

router.get('/rol', getRol );
router.get('/rol/:id', getBuscarRol );
router.put('/rol/editar/:id', getEditarRol );
router.delete('/rol/eliminar/:id', getEliminarRol )

export default router