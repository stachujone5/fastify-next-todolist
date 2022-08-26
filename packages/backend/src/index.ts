import Fastify from 'fastify';

import type { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify({});

server.get('/api', () => {
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

void start();
