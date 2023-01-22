import { Router } from "express";

import {createNewEstadoUsuario, editarEstadoUsuarioId, eliminarEstadoUsuarioId, getTotalEstadoUsuario, getEstadoUsuario,getEstadoUsuarioId,getValidarEditarCrear} from '../controllers/estado_usuario.controller' 

const router =Router()

router.get('/estado_usuario', getEstadoUsuario)

router.post('/estado_usuario',createNewEstadoUsuario )

router.get('/estado_usuario/count', getTotalEstadoUsuario)

router.get('/estado_usuario/:id', getEstadoUsuarioId)

router.delete('/estado_usuario/:id', eliminarEstadoUsuarioId )

router.put('/estado_usuario/:id', editarEstadoUsuarioId );

router.get('/estado_usuario/crear/:Id_ref_usuario', getValidarEditarCrear );

export default router