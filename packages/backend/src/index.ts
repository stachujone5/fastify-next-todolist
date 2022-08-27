import cors from '@fastify/cors';
import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

void fastify.register(cors);

fastify.get('/', () => {
  return { message: 'Hello from fastify!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: 5432 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
void start();
