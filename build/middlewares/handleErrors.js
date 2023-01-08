"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleErrors(error, _req, res, _next) {
    console.error({ error });
    console.error(error.name);
    if (error.name === 'SequelizeValidationError') {
        res.status(400).json({ missingFields: error.message });
    }
    res.status(500).json({ error: error.message });
}
exports.default = handleErrors;
