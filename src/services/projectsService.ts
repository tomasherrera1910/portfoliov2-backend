import { Project } from '../models/Project'
import { Skill } from '../models/Skill'
import '../models/ProjectsTechnologies'
import { IProject, ProjectNoID } from '../types'

export async function getProjects (): Promise<any> {
  return await Project.findAll({
    include: {
      model: Skill,
      as: 'technologies',
      attributes: ['name', 'imageURL', 'technology', 'id']
    }
  })
}

export async function getProject (id: number): Promise<any> {
  return await Project.findByPk(id)
}

export async function createProject (project: ProjectNoID): Promise<any> {
  return await Project.create(project)
}

export async function editProject (id: number, project: Partial<IProject>): Promise<any> {
  const projectToEdit = await Project.findByPk(id)
  projectToEdit?.set(project)
  await projectToEdit?.save()
  return projectToEdit
}

export async function deleteProject (id: number): Promise<void> {
  await Project.destroy({
    where: { id }
  })
}
