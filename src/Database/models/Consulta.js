import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Consulta = sequelize.define('Consulta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_consulta: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    motivo: {
        type: DataTypes.TEXT,
    },
    diagnostico: {
        type: DataTypes.TEXT,
    },
    veterinario: {
        type: DataTypes.STRING(100),
    },
    animal_id: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'consultas',
    timestamps: false,
})

export default Consulta
