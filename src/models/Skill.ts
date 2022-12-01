import { DataTypes } from 'sequelize'
import sequelize from '../database'

export const Skill = sequelize.define('Skill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  technology: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
})

// const syncChanges = async (): Promise<void> => {
//   await Skill.sync()
// }
// syncChanges().catch(e => console.error(e))
