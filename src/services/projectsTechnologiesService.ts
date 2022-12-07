import { ProjectsTechnologies } from '../models/ProjectsTechnologies'

export async function createProjectSkillRelation (project: number, technology: number): Promise<any> {
  return await ProjectsTechnologies.create({
    ProjectId: project,
    SkillId: technology
  })
}

export async function deleteProjectSkillRelation (id: number): Promise<void> {
  await ProjectsTechnologies.destroy({
    where: { id }
  })
}
