import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Cows } from "../../models/cows";

export const updateCowById = async (req: Request, res: Response) => {
  try {
    const { id, ...updates } = req.body;

    if (!id || typeof id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'id'" });
    }

    const cowRepo = AppDataSource.getRepository(Cows);
    const cow = await cowRepo.findOneBy({ id });

    if (!cow) {
      return res.status(404).json({ message: "Cow not found" });
    }

    
    Object.assign(cow, updates);
    const saved = await cowRepo.save(cow);

    res.json({ message: "Cow updated successfully", cow: saved });
  } catch (error) {
    console.error("Error updating cow:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
