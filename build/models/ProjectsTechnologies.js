"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsTechnologies = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const Project_1 = require("./Project");
const Skill_1 = require("./Skill");
exports.ProjectsTechnologies = database_1.default.define('ProjectsTechnologies', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});
Project_1.Project.belongsToMany(Skill_1.Skill, {
    through: exports.ProjectsTechnologies,
    as: 'technologies'
});
Skill_1.Skill.belongsToMany(Project_1.Project, {
    through: exports.ProjectsTechnologies
});
// const SyncChangesForce = async (): Promise<void> => {
//   await Project.sync({ force: true })
//   await Skill.sync({ force: true })
//   await ProjectsTechnologies.sync({ force: true })
// }
// SyncChangesForce()
//   .catch(e => console.error(e.message))
