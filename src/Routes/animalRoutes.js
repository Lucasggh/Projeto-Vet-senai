import {
    createAnimalControllerLS,
    getAllAnimalsControllerLS,
    getAnimalByIdControllerLS,
    updateAnimalControllerLS,
    deleteAnimalControllerLS,
    getConsultasByAnimalIdControllerLS
} from '../Controller/animalController.js'

import { Router } from 'express'
const animalRouter = Router()
animalRouter.get('/', getAllAnimalsControllerLS)
animalRouter.get('/:id', getAnimalByIdControllerLS)
animalRouter.post('/', createAnimalControllerLS)
animalRouter.put('/:id', updateAnimalControllerLS)
animalRouter.delete('/:id', deleteAnimalControllerLS)
animalRouter.get('/:id/consultas', getConsultasByAnimalIdControllerLS)
export default animalRouter