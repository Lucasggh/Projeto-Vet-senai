import {
    createTutorControllerLS,
    getAllTutorsControllerLS,
    getTutorByIdControllerLS,
    updateTutorControllerLS,
    deleteTutorControllerLS
}   from '../Controller/tutorController.js'
import { Router } from 'express'
const tutorRouter = Router()
tutorRouter.post('/', createTutorControllerLS)   
tutorRouter.get('/', getAllTutorsControllerLS)
tutorRouter.get('/:id', getTutorByIdControllerLS)
tutorRouter.put('/:id', updateTutorControllerLS)
tutorRouter.delete('/:id', deleteTutorControllerLS)
export default tutorRouter
