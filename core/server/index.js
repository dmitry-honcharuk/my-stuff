import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';
import morgan from 'morgan';

import {
  COOKIE_SECRET,
  PORT,
  CLIENT_HOST,
  WDS_PORT,
  NODE_ENV,
} from '@common/config';

import apiRoutes from './routes/api';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser(COOKIE_SECRET));
app.use(json());

app.use('/api', apiRoutes);

if (NODE_ENV === 'develop') {
  app.use(proxy({ target: `${CLIENT_HOST}:${WDS_PORT}`, changeOrigin: true }));
}

app.listen(PORT, () => console.info(`Server is running on port: ${PORT}`));
