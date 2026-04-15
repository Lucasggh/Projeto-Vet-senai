import {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS,
    findConsultByAnimalIdLS
} from '../Model/animalModel.js'

const createAnimalServiceLS = async (animal) => {
    return await createLS(animal)
}
const getAllAnimalsServiceLS = async () => {
    return await findAllLS()
}
const getAnimalByIdServiceLS   = async (id) => {
    return await findByIdLS(id)
}
const updateAnimalServiceLS = async (id, animal) => {
    return await updateLS(id, animal)
}
const deleteAnimalServiceLS = async (id) => {
    return await removeLS(id)
}
const getConsultasByAnimalIdServiceLS = async (animal_id) => {
    return await findConsultByAnimalIdLS(animal_id)
}

export {
    createAnimalServiceLS,
    getAllAnimalsServiceLS,
    getAnimalByIdServiceLS,
    updateAnimalServiceLS,
    deleteAnimalServiceLS,
    getConsultasByAnimalIdServiceLS
}

