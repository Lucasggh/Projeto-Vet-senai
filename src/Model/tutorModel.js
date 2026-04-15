// GET   /tutores       Lista todos os tutores
// GET   /tutores/:id   Retorna um tutor pelo ID
// POST  /tutores       Cadastra um novo tutor
// PUT   /tutores/:id   Atualiza os dados de um tutor
// DELETE /tutores/:id  Remove um tutor

import { Tutor } from '../Database/models/index.js'

const createLS = async (tutor) => {
    return await Tutor.create(tutor)
}

const findAllLS = async () => {
    return await Tutor.findAll()
}

const findByIdLS = async (id) => {
    return await Tutor.findByPk(id)
}

const updateLS = async (id, dados) => {
    const tutor = await Tutor.findByPk(id)
    if (!tutor) return null
    return await tutor.update(dados)
}

const removeLS = async (id) => {
    const tutor = await Tutor.findByPk(id)
    if (!tutor) return null
    await tutor.destroy()
    return tutor
}

export {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS
}