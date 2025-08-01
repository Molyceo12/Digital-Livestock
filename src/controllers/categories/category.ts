import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Category } from "../../models/category";


export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categoriesRepo = AppDataSource.getRepository(Category);
    const categories = await categoriesRepo.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error("Error geting all categories:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
