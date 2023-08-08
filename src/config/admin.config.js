import { config } from 'dotenv';
config();

const envConfig = {
  PORT: process.env.PORT,
  PSQL_PORT: process.env.PSQL_PORT,
  PASSWORD: process.env.PASSWORD,
  HOST: process.env.HOST,
  DB: process.env.DB,
  USER: process.env.USER,
  CORS: process.env.CORS?.split(',') || '*',
}


export default envConfig;
