import express from "express";
import path from "node:path";
import { router } from "./routes/index";
import pino from "pino-http";
import helmet from "helmet";
import session from "express-session";
import "dotenv/config";
const server = express();
const logger = pino();

const SECRET = process.env.SECRET as string;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(helmet());
server.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
server.set("views", path.join(__dirname, "../views"));
server.set("view engine", "ejs");
server.use(router);
server.use(logger);
server.use(express.static("public"));

export {
  server
};
