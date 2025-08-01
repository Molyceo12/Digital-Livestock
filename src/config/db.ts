import { User } from "../models/user"; // Note: file name capitalization matters on some OS
import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

function getEnv(name: string): string {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env var: ${name}`);
  return val;
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: getEnv("DB_HOST"),
  port: Number(getEnv("DB_PORT")),
  username: getEnv("DB_USER"),
  password: getEnv("DB_PASSWORD"),
  database: getEnv("DB_NAME"),
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: true,
  entities: [User],  // <-- Add this line!
});
