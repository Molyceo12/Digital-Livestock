import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Cows } from "../../models/cows";

export const createCow = async (req: Request, res: Response) => {
  try {
    const cowRepo = AppDataSource.getRepository(Cows);
    const newCow = cowRepo.create(req.body);
    const savedCow = await cowRepo.save(newCow);
    res.status(201).json(savedCow);
  } catch (error) {
    console.error("Error creating cow:", error);
    res.status(500).json({ message: "Failed to create cow" });
  }
};
