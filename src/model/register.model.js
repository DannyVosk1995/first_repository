import db from "../migration/db.connected.js";
import bcrypt from 'bcrypt';


async function registerModel(name, surname, email, password) {
  const pw = await bcrypt.hash(password, 5);

  await db("registered_users").insert({
    name: name,
    surname: surname,
    email: email,
    password: pw,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  })
}

export default registerModel;
