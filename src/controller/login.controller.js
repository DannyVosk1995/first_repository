import loginModel from "../model/login.model.js";
import { generateAccessToken, generateRefreshToken } from "../jwt/token.js";

async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    const result = await loginModel(email, password);
    const accessToken = await generateAccessToken(email, password)
    const refreshToken = await generateRefreshToken(email, password)
    if (result) {
      return res.status(200).json({ massage: `correct password`, accessToken, refreshToken });

    } else {
      return res.status(403).json({ massage: `invalid password, try again` })
    }
  } catch (error) {
    console.log(error);
    return res.status(403).json('something went wronge,try again!');
  }
}
export default loginController;