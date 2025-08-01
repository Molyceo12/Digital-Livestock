import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Cows } from "../../models/cows";


export const fetchAllCows = async (req: Request, res: Response) => {
  try {
    const cowRepo = AppDataSource.getRepository(Cows);
    const cows = await cowRepo.find();
    res.status(200).json(cows);
  } catch (error) {
    console.error("Error fetching all cows:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
