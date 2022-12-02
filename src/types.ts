export interface IProject {
  id: number
  name: string
  description: string
  image: string
  backendRepo?: string
  frontendRepo?: string
  deployURL: string
}

export type ProjectNoID = Omit<IProject, 'id'>

export interface ISkill {
  id: number
  name: string
  imageURL: string
  technology: string
}

export type SkillNoID = Omit <ISkill, 'id'>
