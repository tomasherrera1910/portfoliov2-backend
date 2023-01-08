"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUser = (req, res, next) => {
    var _a, _b;
    try {
        const token = (_a = req.cookies.token) !== null && _a !== void 0 ? _a : req.params.token;
        if (token === undefined) {
            throw new Error();
        }
        const secret = (_b = process.env.JWT_SECRET) !== null && _b !== void 0 ? _b : '';
        const decodedToken = jsonwebtoken_1.default.verify(token, secret);
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!decodedToken) {
            throw new Error();
        }
        next();
    }
    catch (_error) {
        res.status(401).json({ error: 'Token inválido o inexistente' });
    }
};
exports.default = verifyUser;
