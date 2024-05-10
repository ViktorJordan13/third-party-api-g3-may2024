const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const config = require("./pkg/config");
require("./pkg/db")

const {
    sendWelcomeMail,
    sendPasswordResetMail
} = require("./handlers/mailer");

const {
    login,
    register,
    refreshToken,
    resetPassTemplate,
    resetPassword,
    forgetPassword
} = require("./handlers/auth")

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.set("view engine", "ejs");

api.use(
    "/api",
    jwt({
        secret: config.getSection("development").jwt_key,
        algorithms: ["HS256"],
    }).unless({
        path: [
            "/api/v1/auth/login",
            "/api/v1/auth/register",
            "/api/v1/auth/forgot-password",
        ],
    })
)

api.get("api/v1/auth/refresh-token", refreshToken);
api.post("/api/v1/auth/login", login);
api.post("/api/v1/auth/register", register);

api.get("/forgot-password", (req, res) => {
    res.render("forgot-password")
})
api.post("/api/v1/auth/forgot-password", forgetPassword);

api.get("/reset-password/:id/:token", resetPassTemplate)
api.post("/reset-password/:id/:token", resetPassword);


api.post("/api/v1/welcome-mail", sendWelcomeMail);
api.post("/api/v1/reset-pass-mail", sendPasswordResetMail);

api.use(function (err, req, res, next) {
    if(err.name === "UnauthorizedAccess"){
        res.status(401).send("Invalid token!");
    }
});

api.listen(config.getSection("development").port, (err) => {
    err 
        ? console.err(err)
        : console.log(
            `Server started on port ${config.getSection("development").port}`
        )
})