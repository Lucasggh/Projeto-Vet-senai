import {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS
}
    from '../Model/tutorModel.js'

const createTutorServiceLS = async (tutor) => {
    return await createLS(tutor)
}
const getAllTutorsServiceLS = async () => {
    return await findAllLS()
}
const getTutorByIdServiceLS = async (id) => {
    return await findByIdLS(id)
}
const updateTutorServiceLS = async (id, tutor) => {
    return await updateLS(id, tutor)
}
const deleteTutorServiceLS = async (id) => {
    return await removeLS(id)
}

export {
    createTutorServiceLS,
    getAllTutorsServiceLS,
    getTutorByIdServiceLS,
    updateTutorServiceLS,
    deleteTutorServiceLS
}