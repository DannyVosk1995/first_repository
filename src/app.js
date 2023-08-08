import express from 'express';
const app = express();

import router from './router/router.js';

app.use(express.json());
app.use(router);

export default app;