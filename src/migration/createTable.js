import db from './db.connected.js';


async function up(pg) {
  await pg.schema.createTable('registered_users', (column) => {
    column.increments('id').primary();
    column.text('name').notNullable();
    column.text('surname').notNullable();
    column.text('email').unique().notNullable();
    column.text('password').notNullable();
    column.dateTime('created_at');
    column.dateTime('updated_at');
  })
}

up(db);