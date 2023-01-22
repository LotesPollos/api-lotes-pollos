import { Router } from "express";

import {getNombreUsuario,getValidarLoguin,createNewUser, editarUsuarioId, eliminarUsuarioId, getTotalUsuarios, getUsers,getUsuarioId,getFiltroUsuario,getRecuperarUsuario,getCambiarUsuario} from '../controllers/users.controller' 

const router =Router()

router.get('/users', getUsers)

router.post('/users',createNewUser )

router.get('/users/count', getTotalUsuarios )

router.get('/users/:id', getUsuarioId)

router.delete('/users/:id', eliminarUsuarioId )

router.put('/users/:id', editarUsuarioId );

router.get('/users/login/:contrasena/:nombre_usuario', getValidarLoguin );

router.get('/users/filtro/:nombre/:identificacion/:usuario', getFiltroUsuario );

router.get('/users/recuperar/:cedula/:email', getRecuperarUsuario );

router.put('/users/cambiar/:id', getCambiarUsuario );

router.get('/users/usuario/:id', getNombreUsuario );

export default router