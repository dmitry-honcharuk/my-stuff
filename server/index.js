import express from 'express';

import { PORT } from './config';

const app = express();

app.get('/', (req, res) => res.json({ success: true }));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
