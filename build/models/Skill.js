"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
exports.Skill = database_1.default.define('Skill', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imageURL: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    technology: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false
});
// const syncChanges = async (): Promise<void> => {
//   await Skill.sync()
// }
// syncChanges().catch(e => console.error(e))
