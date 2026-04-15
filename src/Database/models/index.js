import sequelize from '../db.js'
import Tutor from './Tutor.js'
import Animal from './Animal.js'
import Consulta from './Consulta.js'

// Associações
Tutor.hasMany(Animal, { foreignKey: 'tutor_id', as: 'animais' })
Animal.belongsTo(Tutor, { foreignKey: 'tutor_id', as: 'tutor' })

Animal.hasMany(Consulta, { foreignKey: 'animal_id', as: 'consultas' })
Consulta.belongsTo(Animal, { foreignKey: 'animal_id', as: 'animal' })

export { sequelize, Tutor, Animal, Consulta }
