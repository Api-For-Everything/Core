import fastify from 'fastify';

export const buildApp = () => {
  const app = fastify({
    logger: true,
  });

  app.get('/health', async (_request, _reply) => {
    return {
      status: 'ok',
      service: 'openutils',
    };
  });

  return app;
};
