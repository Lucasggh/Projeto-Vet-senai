import {
    createTutorServiceLS,
    getAllTutorsServiceLS,
    getTutorByIdServiceLS,
    updateTutorServiceLS,
    deleteTutorServiceLS
} from '../Service/tutorService.js'
const createTutorControllerLS = async (req, res) => {
    try {
        const tutor = await createTutorServiceLS(req.body)
        res.status(201).json(tutor)
    } catch (error) {
        res.status(500).json({ error: error.message })
    } 
}
const getAllTutorsControllerLS = async (req, res) => {
    try {
        const tutores = await getAllTutorsServiceLS()
        res.json(tutores)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const getTutorByIdControllerLS = async (req, res) => {
    try {   
        const tutor = await getTutorByIdServiceLS(req.params.id)
        if (tutor) {
            res.json(tutor)
        }
        else {
            res.status(404).json({ error: "Tutor não encontrado" })
        }
    }   
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const updateTutorControllerLS = async (req, res) => {
    try {
        const tutor = await updateTutorServiceLS(req.params.id, req.body)    
        if (tutor) {
            res.json(tutor)
        }   
        else {
            res.status(404).json({ error: "Tutor não encontrado" })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const deleteTutorControllerLS = async (req, res) => {
    try {
        const tutor = await deleteTutorServiceLS(req.params.id)
        if (tutor) {
            res.status(204).send()
        }
        else {
            res.status(404).json({ error: "Tutor não encontrado" })
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export {
    createTutorControllerLS,
    getAllTutorsControllerLS,
    getTutorByIdControllerLS,
    updateTutorControllerLS,
    deleteTutorControllerLS
}