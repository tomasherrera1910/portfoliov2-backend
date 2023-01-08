"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.editProject = exports.createProject = exports.getProject = exports.getProjects = void 0;
const Project_1 = require("../models/Project");
const Skill_1 = require("../models/Skill");
require("../models/ProjectsTechnologies");
function getProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Project_1.Project.findAll({
            include: {
                model: Skill_1.Skill,
                as: 'technologies',
                attributes: ['name', 'imageURL', 'technology', 'id']
            }
        });
    });
}
exports.getProjects = getProjects;
function getProject(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Project_1.Project.findByPk(id);
    });
}
exports.getProject = getProject;
function createProject(project) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Project_1.Project.create(project);
    });
}
exports.createProject = createProject;
function editProject(id, project) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectToEdit = yield Project_1.Project.findByPk(id);
        projectToEdit === null || projectToEdit === void 0 ? void 0 : projectToEdit.set(project);
        yield (projectToEdit === null || projectToEdit === void 0 ? void 0 : projectToEdit.save());
        return projectToEdit;
    });
}
exports.editProject = editProject;
function deleteProject(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Project_1.Project.destroy({
            where: { id }
        });
    });
}
exports.deleteProject = deleteProject;
