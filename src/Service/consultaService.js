import {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS,
} from "../Model/consultaModel.js"

const createConsultaServiceLS = async (consulta) => {
    return await createLS(consulta)
}
const getAllConsultasServiceLS = async () => {
    return await findAllLS()
}
const getConsultaByIdServiceLS = async (id) => {
    return await findByIdLS(id)
}
const updateConsultaServiceLS = async (id, consulta) => {
    return await updateLS(id, consulta)
}
const deleteConsultaServiceLS = async (id) => {
    return await removeLS(id)
}


export {
    createConsultaServiceLS,
    getAllConsultasServiceLS,
    getConsultaByIdServiceLS,
    updateConsultaServiceLS,
    deleteConsultaServiceLS
}