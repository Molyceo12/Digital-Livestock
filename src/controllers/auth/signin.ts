import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Users } from "../../models/user";
import { validateEmail, validatePassword } from "../../validations/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "refreshsecretkey";

export const signinUser = async (req: Request, res: Response) => {
  console.log("📩 Received request to signin");

  const { email, password } = req.body;
  console.log("➡️ Request body:", { email, password });

  // Step 1: Validate email & password
  if (!validateEmail(email)) {
    console.log("❌ Invalid email format");
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (!validatePassword(password)) {
    console.log("❌ Password validation failed");
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }
  console.log("✅ Validation passed");

  try {
    // Step 2: Find user in database
    const userRepo = AppDataSource.getRepository(Users);
    const user = await userRepo.findOneBy({ email });

    if (!user) {
      console.log("⚠️ User not found");
      return res.status(400).json({ message: "User not found" });
    }

    // Step 3: Compare password
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      console.log("❌ Incorrect password");
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Step 4: Generate JWT tokens
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

    console.log("✅ Signin successful, tokens generated");
    res.json({ accessToken, refreshToken });
  } catch (err) {
    console.error("🔥 Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
