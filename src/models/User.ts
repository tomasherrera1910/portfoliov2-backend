import { DataTypes } from 'sequelize'
import sequelize from '../database'

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

// const syncChanges = async (): Promise<void> => {
//   await User.sync()
// }
// syncChanges().catch(e => console.error(e))
