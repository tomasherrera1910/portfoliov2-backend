"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const projectsService_1 = require("../services/projectsService");
const projectsRouter = (0, express_1.Router)();
// GET PROJECTS
projectsRouter.get('/projects', (req, res, next) => {
    (0, projectsService_1.getProjects)()
        .then(projects => res.json(projects))
        .catch(e => next(e));
});
// GET ONE PROJECT
projectsRouter.get('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.getProject)(+id)
        .then(project => {
        project !== null
            ? res.json(project)
            : res.status(404).json({ error: 'Project not found' });
    })
        .catch(e => next(e));
});
// CREATE PROJECT
projectsRouter.post('/projects', verifyUser_1.default, (req, res, next) => {
    const { name, description, images, backendRepo, frontEndRepo, deployURL, colors } = req.body;
    (0, projectsService_1.createProject)({
        name,
        description,
        images,
        backendRepo,
        frontEndRepo,
        deployURL,
        technologies: [],
        colors
    })
        .then(newProject => res.status(201).json(newProject))
        .catch(e => next(e));
});
// EDIT PROJECT
projectsRouter.put('/projects/:id', verifyUser_1.default, (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.editProject)(+id, req.body)
        .then(projectUpdated => res.status(202).json(projectUpdated))
        .catch(e => next(e));
});
// DELETE PROJECT
projectsRouter.delete('/projects/:id', verifyUser_1.default, (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.deleteProject)(+id)
        .then(() => res.status(204).end())
        .catch(e => next(e));
});
exports.default = projectsRouter;
