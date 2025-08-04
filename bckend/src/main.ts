import config from './config/config';
import express from 'express';
const app = express();

app.use(express.json());















app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});