import { Skill } from '../models/Skill'
import { ISkill, SkillNoID } from '../types'
import { ObjectMap } from '../utils/ObjectMap'

export async function getSkills (): Promise<any> {
  return await Skill.findAll({})
}

export async function getSkill (id: number): Promise<any> {
  return await Skill.findByPk(id)
}

export async function createSkill (skill: SkillNoID): Promise<any> {
  return await Skill.create(skill)
}

export async function editSkill (id: number, skill: Partial<ISkill>): Promise<any> {
  const skillFormatted = ObjectMap(skill)
  const skillToEdit = await Skill.findByPk(id)
  skillToEdit?.set(skillFormatted)
  await skillToEdit?.save()
  return skillToEdit
}

export async function deleteSkill (id: number): Promise<void> {
  await Skill.destroy({
    where: { id }
  })
}
