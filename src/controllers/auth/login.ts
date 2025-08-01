import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Users } from "../../models/user";
import { validateEmail, validatePassword } from "../../validations/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refreshsecretkey";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (!validatePassword(password)) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  try {
    const userRepo = AppDataSource.getRepository(Users);
    const user = await userRepo.findOneBy({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: "Incorrect password" });

    
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { id: user.id, email: user.email },
      JWT_REFRESH_SECRET,
      { expiresIn: "7d" }
    );

   

    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
