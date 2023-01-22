import { Router } from "express";
import { consultarFechaSistema } from "../../controllers/sistema/fecha.controller";

const router =Router()

router.get('/sistemafecha', consultarFechaSistema); 

export default router