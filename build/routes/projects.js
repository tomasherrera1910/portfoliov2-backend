"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsService_1 = require("../services/projectsService");
const projectsRouter = (0, express_1.Router)();
projectsRouter.get('/projects', (req, res, next) => {
    (0, projectsService_1.getProjects)()
        .then(projects => res.json(projects))
        .catch(e => next(e));
});
projectsRouter.get('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.getProject)(+id)
        .then(project => res.json(project))
        .catch(e => next(e));
});
projectsRouter.post('/projects', (req, res, next) => {
    const { name, description, image, backendRepo, frontendRepo, deployURL } = req.body;
    (0, projectsService_1.createProject)({
        name,
        description,
        image,
        backendRepo,
        frontendRepo,
        deployURL
    })
        .then(newProject => res.status(201).json(newProject))
        .catch(e => next(e));
});
projectsRouter.put('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.editProject)(+id, req.body)
        .then(projectUpdated => res.status(202).json(projectUpdated))
        .catch(e => next(e));
});
projectsRouter.delete('/projects/:id', (req, res, next) => {
    const { id } = req.params;
    (0, projectsService_1.deleteProject)(+id)
        .then(() => res.status(204).end())
        .catch(e => next(e));
});
exports.default = projectsRouter;
