import { Router } from "express";

import { createNewCliente, editarClienteId, eliminarClienteId, getTotalCliente, getCliente,getClienteId, getFiltroCliente,getTablaCliente} from '../controllers/cliente.controller' 


const router =Router()

router.get('/cliente/tabla',getTablaCliente )

router.post('/cliente',createNewCliente )

router.get('/cliente/count', getTotalCliente )

router.get('/cliente/:id', getClienteId)

router.delete('/cliente/:id', eliminarClienteId )

router.put('/cliente/:id', editarClienteId ); 

router.get('/cliente/filtro/:nombre/:identificacion/:direccion', getFiltroCliente );

router.get('/cliente', getCliente )

export default router