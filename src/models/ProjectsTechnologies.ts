import { DataTypes } from 'sequelize'
import sequelize from '../database'
import { Project } from './Project'
import { Skill } from './Skill'

export const ProjectsTechnologies = sequelize.define('ProjectsTechnologies', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

Project.belongsToMany(Skill, {
  through: ProjectsTechnologies,
  as: 'technologies'
})
Skill.belongsToMany(Project, {
  through: ProjectsTechnologies
})

// const SyncChangesForce = async (): Promise<void> => {
//   await Project.sync({ force: true })
//   await Skill.sync({ force: true })
//   await ProjectsTechnologies.sync({ force: true })
// }
// SyncChangesForce()
//   .catch(e => console.error(e.message))
