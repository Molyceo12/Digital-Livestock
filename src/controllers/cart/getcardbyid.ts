import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { CartItem } from "../../models/cart";

export const getCartByUserId = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;

    if (!user_id || typeof user_id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'user_id' in request body" });
    }

    const cartRepo = AppDataSource.getRepository(CartItem);
    const items = await cartRepo.find({
      where: { user_id },
      relations: ["cow"], 
    });

    if (items.length === 0) {
      return res.status(404).json({ message: "No items found in cart" });
    }

    res.json(items);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
