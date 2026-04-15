// GET    /animais                    Lista todos os animais
// GET    /animais/:id                Retorna um animal pelo ID
// POST   /animais                    Cadastra um novo animal
// PUT    /animais/:id                Atualiza os dados de um animal
// DELETE /animais/:id                Remove um animal
// GET    /animais/:id/consultas      Retorna todas as consultas de um animal (JOIN)

import { Animal, Consulta } from '../Database/models/index.js'

const createLS = async (animal) => {
    return await Animal.create(animal)
}

const findAllLS = async () => {
    return await Animal.findAll()
}

const findByIdLS = async (id) => {
    return await Animal.findByPk(id)
}

const updateLS = async (id, dados) => {
    const animal = await Animal.findByPk(id)
    if (!animal) return null
    return await animal.update(dados)
}

const removeLS = async (id) => {
    const animal = await Animal.findByPk(id)
    if (!animal) return null
    await animal.destroy()
    return animal
}

const findConsultByAnimalIdLS = async (animal_id) => {
    return await Consulta.findAll({
        where: { animal_id },
        include: [{ model: Animal, as: 'animal', attributes: ['id', 'nome', 'especie'] }]
    })
}

export {
    createLS,
    findAllLS,
    findByIdLS,
    updateLS,
    removeLS,
    findConsultByAnimalIdLS
}