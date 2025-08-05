import dotenv from 'dotenv';
//importing database
import { db } from '../database/dbConnect';
import { todoSchema } from '../database/schema/todoSchema';


dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;