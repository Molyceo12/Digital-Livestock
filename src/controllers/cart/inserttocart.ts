import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { CartItem } from "../../models/cart";

export const insertToCart = async (req: Request, res: Response) => {
  try {
    const cartRepo = AppDataSource.getRepository(CartItem);
    const newItem = cartRepo.create(req.body);
    const savedItem = await cartRepo.save(newItem);
    res.status(201).json(savedItem);
  } catch (error: any) {
  console.error("Error creating cart item:", error.message || error);
  res.status(500).json({ message: "Failed to add to cart", error: error.message });
}
};
