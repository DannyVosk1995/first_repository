import registerModel from "../model/register.model.js";
import { generateAccessToken, generateRefreshToken } from "../jwt/token.js";
async function registerController(req, res) {
  try {
    const { name, surname, email, password } = req.body;
    await registerModel(name, surname, email, password);

    const accessToken = await generateAccessToken(email, password)
    const refreshToken = await generateRefreshToken(email, password)

    return res.status(200).json({ massege: `Good register`, accessToken, refreshToken });
  } catch (error) {
    console.log(error);
    return res.status(403).json('something wenhent wrong!');
  }
}

export default registerController;