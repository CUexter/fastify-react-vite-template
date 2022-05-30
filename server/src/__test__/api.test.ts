import supertest from "supertest";
import build from "#/app";
import { FastifyInstance } from "fastify";

declare module "vitest" {
  export interface TestContext {
    fastify?: FastifyInstance;
  }
}

beforeEach(async (ctx) => {
  const server = build();
  await server.ready();
  ctx.fastify = server;
});

afterEach(async ({ fastify }) => {
  fastify?.close();
});

describe("API TEST", () => {
  describe("Hello World", () => {
    it("Hello World", async ({ fastify }) => {
      const response = await supertest(fastify?.server).get("/").expect(200);
      expect(response.body).toBeDefined();
      expect(response.text).toBe("Hello World");
    });
  });
});
