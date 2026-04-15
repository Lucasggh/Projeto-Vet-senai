import consultaRouter from "./consultaRoutes.js";
import animalRouter from "./animalRoutes.js";
import tutorRouter from "./tutorRoutes.js";
import { Router } from 'express'
import { autenticar } from "../Middleware/authMiddleware.js";
const router = Router()
router.use('/animais',autenticar, animalRouter)
router.use('/tutores',autenticar, tutorRouter)
router.use('/consultas',autenticar, consultaRouter)
export default router