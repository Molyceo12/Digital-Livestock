import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { CartItem } from "../../models/cart";

export const deleteAllCartItemsByUserId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;

    if (!user_id || typeof user_id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'user_id' in request body" });
    }

    const cartRepo = AppDataSource.getRepository(CartItem);
    const result = await cartRepo.delete({ user_id });

    if (result.affected === 0) {
      return res.status(404).json({ message: "No items found for this user" });
    }

    res.json({ message: "All cart items deleted for user" });
  } catch (error) {
    console.error("Error deleting cart items:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
