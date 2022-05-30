import dotenv from "dotenv";
import fastify from "fastify";

dotenv.config();

const build = () => {
  const app = fastify({
    logger: {
      level: "info",
      prettyPrint: process.env.NODE_ENV !== "production",
    },
  });
  app.get("/", async () => "Hello World");
  return app;
};

export default build;
