import { DataTypes } from 'sequelize'
import sequelize from '../database'

export const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  images: {
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: { mobile: '', desktop: '' }
  },
  colors: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  backendRepo: {
    type: DataTypes.STRING
  },
  frontEndRepo: {
    type: DataTypes.STRING
  },
  deployURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// const syncChanges = async (): Promise<void> => {
//   await Project.sync({ alter: true })
// }
// syncChanges().catch(e => console.error(e))
