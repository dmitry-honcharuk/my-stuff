import path from 'path';
import express from 'express';
import proxy from 'http-proxy-middleware';

import { PORT, SITE_HOST, WDS_PORT } from './config';

const app = express();

app.use(express.static(path.resolve(__dirname, '../static')));

app.use(proxy({ target: `${SITE_HOST}:${WDS_PORT}`, changeOrigin: true }));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
