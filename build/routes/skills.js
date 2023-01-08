"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const skillsService_1 = require("../services/skillsService");
const skillsRouter = (0, express_1.Router)();
skillsRouter.get('/skills', (req, res, next) => {
    (0, skillsService_1.getSkills)()
        .then(skills => res.json(skills))
        .catch(e => next(e));
});
skillsRouter.get('/skills/:id', (req, res, next) => {
    const { id } = req.params;
    (0, skillsService_1.getSkill)(+id)
        .then(skill => {
        skill !== null
            ? res.json(skill)
            : res.status(404).json({ error: 'Skill not found' });
    })
        .catch(e => next(e));
});
skillsRouter.post('/skills', verifyUser_1.default, (req, res, next) => {
    const { name, imageURL, technology } = req.body;
    (0, skillsService_1.createSkill)({
        name,
        imageURL,
        technology
    })
        .then(newSkill => res.status(201).json(newSkill))
        .catch(e => next(e));
});
skillsRouter.put('/skills/:id', verifyUser_1.default, (req, res, next) => {
    const { id } = req.params;
    (0, skillsService_1.editSkill)(+id, req.body)
        .then(skillUpdated => res.status(202).json(skillUpdated))
        .catch(e => next(e));
});
skillsRouter.delete('/skills/:id', verifyUser_1.default, (req, res, next) => {
    const { id } = req.params;
    (0, skillsService_1.deleteSkill)(+id)
        .then(() => res.status(204).end())
        .catch(e => next(e));
});
exports.default = skillsRouter;
