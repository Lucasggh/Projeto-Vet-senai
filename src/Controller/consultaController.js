import {
    createConsultaServiceLS,
    getAllConsultasServiceLS,
    getConsultaByIdServiceLS,
    updateConsultaServiceLS,
    deleteConsultaServiceLS
} from '../Service/consultaService.js'

const createConsultaControllerLS = async (req, res) => {
    try {
        const consulta = await createConsultaServiceLS(req.body)
        return res.status(201).json(consulta)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllConsultasControllerLS = async (req, res) => {
    try {
        const consultas = await getAllConsultasServiceLS()
        return res.status(200).json(consultas)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getConsultaByIdControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const consulta = await getConsultaByIdServiceLS(id)

        if (!consulta) {
            return res.status(404).json({ message: 'Consulta não encontrada' })
        }

        return res.status(200).json(consulta)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const updateConsultaControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const updated = await updateConsultaServiceLS(id, req.body)

        if (!updated) {
            return res.status(404).json({ message: 'Consulta não encontrada' })
        }

        return res.status(200).json(updated)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteConsultaControllerLS = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await deleteConsultaServiceLS(id)

        if (!deleted) {
            return res.status(404).json({ message: 'Consulta não encontrada' })
        }

        return res.status(204).send()
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export {
    createConsultaControllerLS,
    getAllConsultasControllerLS,
    getConsultaByIdControllerLS,
    updateConsultaControllerLS,
    deleteConsultaControllerLS
}