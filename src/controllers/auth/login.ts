import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { User } from "../../models/user";
import { validateEmail, validatePassword } from "../../validations/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey"; 

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (!validatePassword(password)) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ message: "Incorrect password" });

    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ accessToken: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
