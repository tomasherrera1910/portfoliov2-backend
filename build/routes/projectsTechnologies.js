"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const projectsTechnologiesService_1 = require("../services/projectsTechnologiesService");
const ProjectsTechnologiesRouter = (0, express_1.Router)();
// CREATE RELATION
ProjectsTechnologiesRouter.post('/union/project-skill', verifyUser_1.default, (req, res, next) => {
    const { projectId, skillId } = req.body;
    (0, projectsTechnologiesService_1.createProjectSkillRelation)(projectId, skillId)
        .then(newUnion => res.status(201).json(newUnion))
        .catch(e => next(e));
});
// DELETE RELATION
ProjectsTechnologiesRouter.delete('/union/project-skill/:id', verifyUser_1.default, (req, res, next) => {
    const { id } = req.params;
    (0, projectsTechnologiesService_1.deleteProjectSkillRelation)(+id)
        .then(() => res.status(204).end())
        .catch(e => next(e));
});
exports.default = ProjectsTechnologiesRouter;
