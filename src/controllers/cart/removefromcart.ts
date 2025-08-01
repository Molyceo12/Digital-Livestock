import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { CartItem } from "../../models/cart";

export const deleteCartItemById = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id || typeof id !== "number") {
      return res.status(400).json({ message: "Invalid or missing 'id' in request body" });
    }

    const cartRepo = AppDataSource.getRepository(CartItem);
    const result = await cartRepo.delete(id);

    if (result.affected === 0) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
