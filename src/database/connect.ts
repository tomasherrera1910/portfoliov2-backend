import sequelize from './index'

const dbConnect = async (): Promise<void> => {
  try {
    await sequelize.authenticate()
    console.log('DB CONNECTED')
  } catch (error) {
    console.error(error)
  }
}

dbConnect()
  .catch(e => console.error(e))
