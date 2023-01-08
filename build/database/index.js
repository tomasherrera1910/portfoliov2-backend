"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const sequelize_1 = require("sequelize");
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT } = process.env;
const sequelize = new sequelize_1.Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    port: Number(DATABASE_PORT),
    dialect: 'postgres'
});
exports.default = sequelize;
