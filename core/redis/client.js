import redis from 'redis';

import { REDIS_HOST, REDIS_PORT } from '@core/config';

const client = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
});

client.on('error', err => {
  console.info('REDIS ERROR:');
  console.error(err);
});

client.on('warning', warning => {
  console.info('REDIS WARNING:');
  console.error(warning);
});

client.on('ready', () => console.info('REDIS READY'));

export default client;
