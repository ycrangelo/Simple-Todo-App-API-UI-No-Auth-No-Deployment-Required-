// drizzle.config.ts
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  schema: './src/database/schema/todoSchema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '', // ✅ Correct key
  },
};
