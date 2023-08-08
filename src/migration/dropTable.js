import db from "./db.connected.js";

async function down(pg) {
  await pg.schema.dropTableIfExists("registered_users");
}

down(db);