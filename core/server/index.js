import path from 'path';
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';
import morgan from 'morgan';

import { COOKIE_SECRET, PORT, CLIENT_HOST, WDS_PORT } from '@common/config';

import apiRoutes from './routes/api';

const app = express();

app.use(morgan('dev'));
app.use(cookieParser(COOKIE_SECRET));
app.use(json());

app.use(express.static(path.resolve(__dirname, '../../static')));

app.use('/api', apiRoutes);

app.use(proxy({ target: `${CLIENT_HOST}:${WDS_PORT}`, changeOrigin: true }));

app.listen(PORT, () => console.info(`Server is running on port: ${PORT}`));
