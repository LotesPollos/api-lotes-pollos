import { Router } from "express";
import { getCombobox } from "..//../controllers/combobox/combobox.controller";

const router =Router()

router.get('/combobox', getCombobox)

export default router 