import express from "express";
import path from "node:path";
import { router } from "./routes/index";
import pino from "pino-http";
const server = express();
const logger = pino();

server.use(router);
server.use(logger);
server.set("views", path.join(__dirname, "../views"));
server.set("view engine", "ejs");
server.use(express.static("public"));

export {
  server
};
