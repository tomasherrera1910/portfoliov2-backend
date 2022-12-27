export interface IProject {
  id: number
  name: string
  description: string
  image: string
  backendRepo?: string
  frontendRepo?: string
  deployURL: string
  colors: string[]
  technologies: ISkill[]
}

export type ProjectNoID = Omit<IProject, 'id'>

export interface ISkill {
  id: number
  name: string
  imageURL: string
  technology: string
}

export type SkillNoID = Omit<ISkill, 'id'>

export interface IUser {
  id: number
  username: string
  email: string
  password: string
}
export type UserNoID = Omit<IUser, 'id'>
