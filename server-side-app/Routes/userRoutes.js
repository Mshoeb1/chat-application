const express = require("express");
const Router = express.Router();
const {loginController, registerController} = require("../Controller/userController");
Router.post("/login", loginController);
Router.post("/register", registerController);

module.exports = Router;