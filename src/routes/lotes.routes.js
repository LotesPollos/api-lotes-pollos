import { Router } from "express";

import { createNewLotes, editarLotesId, eliminarLotesId, getTotalLotes, getLotes,getLotesId,getTablaLotes} from '../controllers/Lotes.controller' 

const router =Router()

router.get('/lotes/tabla',getTablaLotes )

router.post('/lotes',createNewLotes )

router.get('/lotes/count', getTotalLotes )

router.get('/lotes/:id', getLotesId)

router.delete('/lotes/:id', eliminarLotesId )

router.put('/lotes/:id', editarLotesId )

router.get('/lotes', getLotes)

export default router