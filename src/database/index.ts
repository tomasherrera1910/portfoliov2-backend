/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Sequelize } from 'sequelize'

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_HOST } = process.env

const sequelize = new Sequelize(DATABASE_NAME!, DATABASE_USER!, DATABASE_PASSWORD, {
  port: Number(DATABASE_PORT)!,
  dialect: 'postgres',
  host: DATABASE_HOST
})

export default sequelize
