"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = ['http://localhost:3000', 'http://localhost:3000/**', 'http://localhost:3001', 'http://localhost:3001/**', undefined];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};
exports.default = corsOptions;
