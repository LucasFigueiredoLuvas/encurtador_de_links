import express from "express";
import path from "node:path";
import { router } from "./routes/index";
import pino from "pino-http";
import helmet from "helmet";
const server = express();
const logger = pino();

server.use(helmet());
server.use(router);
server.use(logger);
server.set("views", path.join(__dirname, "../views"));
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

export {
  server
};
