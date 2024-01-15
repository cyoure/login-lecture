"use strict";

// 모듈
const express = require("express");
const app = express();

const home = require("./routes/home"); // 라우팅

// 웹 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use 미들웨어

module.exports = app;