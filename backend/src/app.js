require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const todosRouter = require("./todos/todos.router")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", todosRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;