import { DataTypes } from 'sequelize'
import sequelize from '../database'

export const Skill = sequelize.define('Skill', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  imageURL: {
    type: DataTypes.STRING
  },
  technology: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
})
