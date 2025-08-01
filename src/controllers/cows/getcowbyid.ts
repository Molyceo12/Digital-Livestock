import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Cows } from "../../models/cows";

export const getCowById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id || typeof id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'id' in request body" });
    }

    const cowRepo = AppDataSource.getRepository(Cows);
    const cow = await cowRepo.findOneBy({ id });

    if (!cow) {
      return res.status(404).json({ message: "Cow not found" });
    }

    res.json(cow);
  } catch (error) {
    console.error("Error fetching cow by id:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

