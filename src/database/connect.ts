import sequelize from './index'

export const dbConnect = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    console.log('DB CONNECTED')
  } catch (error) {
    console.error(error)
  }
}
