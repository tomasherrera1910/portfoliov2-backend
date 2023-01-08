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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_1.User.findAll({});
    });
}
exports.getUsers = getUsers;
function getUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield User_1.User.findByPk(id);
    });
}
exports.getUser = getUser;
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordHash = yield bcrypt_1.default.hash(user.password, 10);
        return yield User_1.User.create(Object.assign(Object.assign({}, user), { password: passwordHash }));
    });
}
exports.createUser = createUser;
function editUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        let passwordHash = null;
        if (user.password !== undefined) {
            passwordHash = yield bcrypt_1.default.hash(user.password, 10);
        }
        const userToEdit = yield User_1.User.findByPk(id);
        passwordHash !== null
            ? userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.set(Object.assign(Object.assign({}, user), { password: passwordHash }))
            : userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.set(user);
        yield (userToEdit === null || userToEdit === void 0 ? void 0 : userToEdit.save());
        return userToEdit;
    });
}
exports.editUser = editUser;
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield User_1.User.destroy({
            where: { id }
        });
    });
}
exports.deleteUser = deleteUser;
