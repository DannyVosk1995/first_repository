import db from "../migration/db.connected.js";
import bcrypt from 'bcrypt';


async function loginModel(email, pass) {
  const res = await db.select("password").from("registered_users").where('email', '=', email);
  const hashPw = res[0].password;

  const isLogin = await bcrypt.compare(pass, hashPw);

  return isLogin

}

export default loginModel;