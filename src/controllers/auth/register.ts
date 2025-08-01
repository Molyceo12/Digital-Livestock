import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Users } from "../../models/user";
import { validateEmail, validatePassword } from "../../validations/auth";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  try {
    const userRepo = AppDataSource.getRepository(Users);
    const existingUser = await userRepo.findOneBy({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userRepo.create({ email, password: hashedPassword });
    await userRepo.save(newUser);

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
