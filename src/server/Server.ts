import express from "express";
import { router } from "./routes/index";
import pino from "pino-http";
const server = express();
const logger = pino();

// server.use(express.json());
server.use(router);
server.use(logger);

export {
  server
};
