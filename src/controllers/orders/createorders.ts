import { Request, Response } from "express";
import { AppDataSource } from "../../config/db";
import { Order } from "../../models/orders";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user_id, cow_id } = req.body;

    if (!user_id || !cow_id) {
      return res.status(400).json({ message: "user_id and cow_id are required" });
    }

    const orderRepo = AppDataSource.getRepository(Order);
    const newOrder = orderRepo.create({ user_id, cow_id }); 
    const savedOrder = await orderRepo.save(newOrder);

    res.status(201).json(savedOrder);
  } catch (error: any) {
    console.error("Order creation failed:", error.message);
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
};
