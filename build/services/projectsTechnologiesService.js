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
exports.deleteProjectSkillRelation = exports.createProjectSkillRelation = void 0;
const ProjectsTechnologies_1 = require("../models/ProjectsTechnologies");
function createProjectSkillRelation(project, technology) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield ProjectsTechnologies_1.ProjectsTechnologies.create({
            ProjectId: project,
            SkillId: technology
        });
    });
}
exports.createProjectSkillRelation = createProjectSkillRelation;
function deleteProjectSkillRelation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield ProjectsTechnologies_1.ProjectsTechnologies.destroy({
            where: { id }
        });
    });
}
exports.deleteProjectSkillRelation = deleteProjectSkillRelation;
