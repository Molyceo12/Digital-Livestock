import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { CartItem } from "../../models/cart";

export const getCartCountByUserId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;

    if (!user_id || typeof user_id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'user_id' in request body" });
    }

    const cartRepo = AppDataSource.getRepository(CartItem);
    const count = await cartRepo.count({ where: { user_id } });

    res.json({ count });
  } catch (error) {
    console.error("Error counting cart items:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
