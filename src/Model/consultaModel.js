// GET    /consultas       Lista todas as consultas
// GET    /consultas/:id   Retorna uma consulta pelo ID
// POST   /consultas       Registra uma nova consulta
// PUT    /consultas/:id   Atualiza os dados de uma consulta
// DELETE /consultas/:id   Remove uma consulta

import { Consulta } from '../Database/models/index.js'

const createLS = async (consulta) => {
    return await Consulta.create(consulta)
}

const findAllLS = async () => {
    return await Consulta.findAll()
}

const findByIdLS = async (id) => {
    return await Consulta.findByPk(id)
}

const updateLS = async (id, dados) => {
    const consulta = await Consulta.findByPk(id)
    if (!consulta) return null
    return await consulta.update(dados)
}

const removeLS = async (id) => {
    const consulta = await Consulta.findByPk(id)
    if (!consulta) return null
    await consulta.destroy()
    return consulta
}

export {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS
}