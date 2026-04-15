import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Tutor = sequelize.define('Tutor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(20),
    },
    email: {
        type: DataTypes.STRING(100),
    },
}, {
    tableName: 'tutores',
    timestamps: false,
})

export default Tutor
