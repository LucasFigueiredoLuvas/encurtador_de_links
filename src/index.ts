import { server } from "./server/Server";
import "dotenv/config";
import pinoHttp from "pino-http";

const pino = pinoHttp();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  pino.logger.info("Server listen on: localhost:", PORT);
});
