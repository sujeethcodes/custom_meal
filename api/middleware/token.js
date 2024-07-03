import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import UserModel from "../model/user.js";
import response from "../config/res.js";

dotenv.config()

export const tokenGenerate = async (userId) => {
  try {
    const token = jwt.sign({ userId: userId},process.env.JWT_SECRET);
    return token;
  } catch (err) {
    console.log("tokenGenerate_error", err.message);
  }
};


export const verifyUser = async (req, res, next) => {
  if (!req.headers["authorization"]) return res.json(response.TOKEN_REQUIRED);
  const token = req.headers["authorization"].split(" ")[1];
  if (!token) return res.json(response.INVAILD_TOKEN);
  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  const findUser = await UserModel.findOne({ where:{id : decoded?.userId}});
  if (!findUser) return res.json(response.INVAILD_USER);
     req.user = findUser;
  next();
};

