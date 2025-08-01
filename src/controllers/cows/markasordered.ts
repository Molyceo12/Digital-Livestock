import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Cows } from "../../models/cows";

export const markCowAsOrdered = async (req: Request, res: Response) => {
  try {
    const { cow_id } = req.body;

    if (!cow_id || typeof cow_id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'cow_id'" });
    }

    const cowRepo = AppDataSource.getRepository(Cows);
    const cow = await cowRepo.findOneBy({ id: cow_id });

    if (!cow) {
      return res.status(404).json({ message: "Cow not found" });
    }

    cow.purchase_status = "ordered";
    await cowRepo.save(cow);

    res.json({ message: "Purchase status updated to 'ordered'", cow });
  } catch (error) {
    console.error("Error updating purchase_status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
