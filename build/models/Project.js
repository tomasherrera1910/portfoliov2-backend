"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Project = database_1.default.define('Project', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    colors: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING)
    },
    backendRepo: {
        type: sequelize_1.DataTypes.STRING
    },
    frontEndRepo: {
        type: sequelize_1.DataTypes.STRING
    },
    deployURL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
// const syncChanges = async (): Promise<void> => {
//   await Project.sync()
// }
// syncChanges().catch(e => console.error(e))
