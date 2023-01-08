"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userService_1 = require("../services/userService");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/users', (req, res, next) => {
    (0, userService_1.getUsers)()
        .then(users => res.json(users))
        .catch(e => next(e));
});
usersRouter.get('/users/:id', (req, res, next) => {
    const { id } = req.params;
    (0, userService_1.getUser)(+id)
        .then(user => {
        user !== null
            ? res.json(user)
            : res.status(404).json({ error: 'User not found' });
    })
        .catch(e => next(e));
});
usersRouter.post('/users', (req, res, next) => {
    const { username, email, password } = req.body;
    (0, userService_1.createUser)({
        username,
        email,
        password
    })
        .then(newUser => res.status(201).json(newUser))
        .catch(e => next(e));
});
usersRouter.put('/users/:id', (req, res, next) => {
    const { id } = req.params;
    (0, userService_1.editUser)(+id, req.body)
        .then(userUpdated => res.status(202).json(userUpdated))
        .catch(e => next(e));
});
usersRouter.delete('/users/:id', (req, res, next) => {
    const { id } = req.params;
    (0, userService_1.deleteUser)(+id)
        .then(() => res.status(204).end())
        .catch(e => next(e));
});
exports.default = usersRouter;
