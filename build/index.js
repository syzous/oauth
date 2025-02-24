"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const express_openid_connect_1 = require("express-openid-connect");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 3000;
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "5ffeaa434ccd3517ccc29470a68110af1b89c40d3bb844457a094c0b212bc741",
    baseURL: "http://localhost:3000",
    clientID: "5xMrnwTclk10ntJjBqbmUK3IuHNs9Fdy",
    issuerBaseURL: "https://dev-q3ebm5xvihubaktw.us.auth0.com",
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use((0, express_openid_connect_1.auth)(config));
// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
app.get("/profile", (0, express_openid_connect_1.requiresAuth)(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map