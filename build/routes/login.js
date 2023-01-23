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
const express_1 = require("express");
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUser_1 = __importDefault(require("../middlewares/verifyUser"));
const loginRouter = (0, express_1.Router)();
loginRouter.post('/login', ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { password } = req.body;
    const user = yield User_1.User.findOne({
        where: { email: 'tomymza10@gmail.com' }
    });
    const passwordCorrect = (user != null) ? yield bcrypt_1.default.compare(password, user.password) : false;
    if ((user == null) || !passwordCorrect) {
        return res.status(401).json({ error: 'La clave es incorrecta' });
    }
    const userForToken = { id: user.id, email: user.email };
    const secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : '';
    const token = jsonwebtoken_1.default.sign(userForToken, secret, {
        expiresIn: 60 * 60 * 24 * 365
    });
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'production ' || NODE_ENV === undefined) {
        res.cookie('token', token, {
            sameSite: 'none',
            secure: false
        });
    }
    else if (NODE_ENV.includes('development')) {
        res.cookie('token', token);
    }
    return res.status(202).json({ token });
})));
loginRouter.get('/verifyLogin/:token', verifyUser_1.default, (_req, res) => {
    return res.json({ login: true });
});
exports.default = loginRouter;
