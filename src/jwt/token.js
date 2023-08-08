import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

async function generateAccessToken(email, password) {
  const payload = {
    email: email,
    password: password,
  };
  const accessToken = jwt.sign(payload, process.env.SECRET_KEY_ACCESS_TOKEN, {
    expiresIn: process.env.JWT_ACCESS_TIME,
  });
  return accessToken;
}
async function generateRefreshToken(email, password) {
  const payload = {
    email: email,
    password: password,
  };
  const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH_TOKEN, {
    expiresIn: process.env.JWT_REFRESH_TIME,
  });
  return refreshToken;
}

export {
  generateAccessToken,
  generateRefreshToken
}
