import http from 'http';
import app from './app.js';
import config from './config/admin.config.js';

const { PORT } = config;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

