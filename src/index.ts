import { server } from "./server/Server";
import "dotenv/config";
// import pinoHttp from "pino-http";

// const pino = pinoHttp();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listen on: http://localhost:${PORT}`);
});
