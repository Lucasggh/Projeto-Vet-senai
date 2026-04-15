import {
    createAnimalServiceLS,
    getAllAnimalsServiceLS,
    getAnimalByIdServiceLS,
    updateAnimalServiceLS,
    deleteAnimalServiceLS,
    getConsultasByAnimalIdServiceLS
} from '../Service/animalService.js'

const createAnimalControllerLS = async (req, res) => {
    try {
        const animal = await createAnimalServiceLS(req.body)
        return res.status(201).json(animal)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllAnimalsControllerLS = async (req, res) => {
    try {
        const animals = await getAllAnimalsServiceLS()
        return res.status(200).json(animals)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAnimalByIdControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const animal = await getAnimalByIdServiceLS(id)

        if (!animal) {
            return res.status(404).json({ message: 'Animal não encontrado' })
        }

        return res.status(200).json(animal)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateAnimalControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const updated = await updateAnimalServiceLS(id, req.body)

        if (!updated) {
            return res.status(404).json({ message: 'Animal não encontrado' })
        }

        return res.status(200).json(updated)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteAnimalControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await deleteAnimalServiceLS(id)

        if (!deleted) {
            return res.status(404).json({ message: 'Animal não encontrado' })
        }

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getConsultasByAnimalIdControllerLS = async (req, res) => {
    try {
        const { id: animal_id } = req.params
        const consultas = await getConsultasByAnimalIdServiceLS(animal_id)
        return res.status(200).json(consultas)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
export {
    createAnimalControllerLS,
    getAllAnimalsControllerLS,
    getAnimalByIdControllerLS,
    updateAnimalControllerLS,
    deleteAnimalControllerLS,
    getConsultasByAnimalIdControllerLS
}