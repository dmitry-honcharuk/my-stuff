import path from 'path';
import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import proxy from 'http-proxy-middleware';

import { COOKIE_SECRET, PORT, SITE_HOST, WDS_PORT } from './config';

import apiRoutes from './routes/api';

const app = express();

app.use(cookieParser(COOKIE_SECRET));
app.use(json());

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', apiRoutes);

app.use(proxy({ target: `${SITE_HOST}:${WDS_PORT}`, changeOrigin: true }));

app.listen(PORT, () => console.info(`Server is running on port: ${PORT}`));
