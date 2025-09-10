import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Users } from "../../models/user";
import { validateEmail, validatePassword } from "../../validations/auth";
import bcrypt from "bcrypt";

export const signupUser = async (req: Request, res: Response) => {
  console.log("📩 Received request to signup user");

  const { email, password } = req.body;
  console.log("➡️ Request body:", { email, password });

  if (!validateEmail(email)) {
    console.log("❌ Email validation failed");
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!validatePassword(password)) {
    console.log("❌ Password validation failed");
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  try {
    const userRepo = AppDataSource.getRepository(Users);
    const existingUser = await userRepo.findOneBy({ email });

    if (existingUser) {
      console.log("⚠️ User already exists:", existingUser.email);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userRepo.create({ email, password: hashedPassword });
    await userRepo.save(newUser);

    console.log("✅ User signed up successfully:", newUser.email);
    res.status(201).json({ message: "User signed up successfully", user: newUser });
  } catch (err) {
    console.error("🔥 Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
