export interface IProject {
  id: number
  name: string
  description: string
  images: ProjectImages
  backendRepo?: string
  frontendRepo?: string
  deployURL: string
  colors: string[]
  technologies: ISkill[]
}
interface ProjectImages {
  desktop: string
  mobile: string
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
