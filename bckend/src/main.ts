import config from './config/config';
import express from 'express';
const app = express();
import router from './routes/todos/routes';
import cors from "cors"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const corsOptions = {
  origin:  '*',
  methods: ['PUT', 'GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
};
//added cors for security and connectivity to frontend
app.use(cors(corsOptions));

app.use("/api", router)
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});