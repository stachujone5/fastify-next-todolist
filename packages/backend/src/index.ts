import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';

const server: FastifyInstance = Fastify({});

server.get('/', async (request, reply) => {
  return { message: 'Hello from API!' };
});

const start = async () => {
  try {
    await server.listen({ port: 5000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
