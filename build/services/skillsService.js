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
exports.deleteSkill = exports.editSkill = exports.createSkill = exports.getSkill = exports.getSkills = void 0;
const Skill_1 = require("../models/Skill");
const ObjectMap_1 = require("../utils/ObjectMap");
function getSkills() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Skill_1.Skill.findAll({});
    });
}
exports.getSkills = getSkills;
function getSkill(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Skill_1.Skill.findByPk(id);
    });
}
exports.getSkill = getSkill;
function createSkill(skill) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Skill_1.Skill.create(skill);
    });
}
exports.createSkill = createSkill;
function editSkill(id, skill) {
    return __awaiter(this, void 0, void 0, function* () {
        const skillFormatted = (0, ObjectMap_1.ObjectMap)(skill);
        const skillToEdit = yield Skill_1.Skill.findByPk(id);
        skillToEdit === null || skillToEdit === void 0 ? void 0 : skillToEdit.set(skillFormatted);
        yield (skillToEdit === null || skillToEdit === void 0 ? void 0 : skillToEdit.save());
        return skillToEdit;
    });
}
exports.editSkill = editSkill;
function deleteSkill(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield Skill_1.Skill.destroy({
            where: { id }
        });
    });
}
exports.deleteSkill = deleteSkill;
