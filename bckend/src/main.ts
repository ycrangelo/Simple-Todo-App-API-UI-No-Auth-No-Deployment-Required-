import config from './config/config';
import express from 'express';
const app = express();
import router from './routes/todos/routes';

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});