const express = require("express");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const { postRegister, postLogin } = require("../Controllers/authController");
const { verifyToken } = require("../Middlewares/checkJWT");

const authRoute = express.Router();

const registerSchema = Joi.object({
  userName: Joi.string().min(3).required(),
  password: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

authRoute.post("/register", validator.body(registerSchema), postRegister);
authRoute.post("/login", validator.body(loginSchema), postLogin);

authRoute.get("/test", verifyToken, (req, res) => {
  return res.send(req.user);
});

module.exports = authRoute;
