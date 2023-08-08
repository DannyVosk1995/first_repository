import knex from 'knex';
import env from 'dotenv';
env.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.HOST,
    password: process.env.PASSWORD,
    user: process.env.USER,
    database: process.env.DB,
    port: 5432,
  },
});


export default db