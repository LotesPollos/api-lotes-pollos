import { Router } from "express";

import {getRecuperarUsuario,getRecuperarContrasena,getCantidadDisponibleVentas,getCantidadDisponibleMortalidad, getRangoFecha }from '../../controllers/validacion/validacion.controller'

const router =Router()

router.get('/validacion/:id',getCantidadDisponibleMortalidad )
router.get('/validacion/ventas/:id',getCantidadDisponibleVentas )
router.get('/validacion/rango/:id/:fecha',getRangoFecha )
router.get('/validacion/contrasena/:usuario/:documento',getRecuperarContrasena )
router.get('/validacion/usuario/:correo/:documento',getRecuperarUsuario )

export default router