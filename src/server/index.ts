import { buildApp } from '../app/index.js';
import { env } from '../config/env.js';

const start = async () => {
  const app = buildApp();
  try {
    const port = parseInt(env.PORT, 10);
    await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening at http://0.0.0.0:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
