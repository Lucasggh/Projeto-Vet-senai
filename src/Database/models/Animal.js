import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Animal = sequelize.define('Animal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    especie: {
        type: DataTypes.STRING(50),
    },
    raca: {
        type: DataTypes.STRING(50),
    },
    data_nascimento: {
        type: DataTypes.DATEONLY,
    },
    tutor_id: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'animais',
    timestamps: false,
})

export default Animal
