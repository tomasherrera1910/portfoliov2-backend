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
  image: {
    type: DataTypes.STRING,
    allowNull: false
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
//   await Project.sync()
// }
// syncChanges().catch(e => console.error(e))
