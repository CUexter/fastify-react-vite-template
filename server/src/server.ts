import dotenv from "dotenv";
import build from "#/app";

dotenv.config();

const port = process.env.API_PORT || 5000;

const start = async () => {
  const app = build();
  await app.listen(port);
};

start();
