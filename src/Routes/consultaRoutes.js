import {
    createConsultaControllerLS,
    getAllConsultasControllerLS,
    getConsultaByIdControllerLS,
    updateConsultaControllerLS,
    deleteConsultaControllerLS
}
    from '../Controller/consultaController.js'

import { Router } from 'express'
const consultaRouter = Router()
consultaRouter.post('/', createConsultaControllerLS)
consultaRouter.get('/', getAllConsultasControllerLS)
consultaRouter.get('/:id', getConsultaByIdControllerLS)
consultaRouter.put('/:id', updateConsultaControllerLS)
consultaRouter.delete('/:id', deleteConsultaControllerLS)
export default consultaRouter