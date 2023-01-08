"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("./database/connect");
const projects_1 = __importDefault(require("./routes/projects"));
const skills_1 = __importDefault(require("./routes/skills"));
const projectsTechnologies_1 = __importDefault(require("./routes/projectsTechnologies"));
const users_1 = __importDefault(require("./routes/users"));
const handleErrors_1 = __importDefault(require("./middlewares/handleErrors"));
const login_1 = __importDefault(require("./routes/login"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions_1.default));
app.use(express_1.default.json()); // bodyparser
// Routes
app.use(projects_1.default);
app.use(skills_1.default);
app.use(projectsTechnologies_1.default);
app.use(users_1.default);
app.use(login_1.default);
// Handle Errors
app.use(handleErrors_1.default);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
