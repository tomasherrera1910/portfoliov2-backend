import { User } from '../models/User'
import { IUser, UserNoID } from '../types'
import bcrypt from 'bcrypt'

export async function getUsers (): Promise<any> {
  return await User.findAll({})
}

export async function getUser (id: number): Promise<any> {
  return await User.findByPk(id)
}

export async function createUser (user: UserNoID): Promise<any> {
  const passwordHash = await bcrypt.hash(user.password, 10)
  return await User.create({ ...user, password: passwordHash })
}

export async function editUser (id: number, user: Partial<IUser>): Promise<any> {
  let passwordHash = null
  if (user.password !== undefined) {
    passwordHash = await bcrypt.hash(user.password, 10)
  }
  const userToEdit = await User.findByPk(id)
  passwordHash !== null
    ? userToEdit?.set({ ...user, password: passwordHash })
    : userToEdit?.set(user)
  await userToEdit?.save()
  return userToEdit
}

export async function deleteUser (id: number): Promise<void> {
  await User.destroy({
    where: { id }
  })
}
