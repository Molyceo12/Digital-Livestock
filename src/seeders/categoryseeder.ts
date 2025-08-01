import { AppDataSource } from "../config/db";
import { Category } from "../models/category";

export const seedCategories = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  const categoryRepo = AppDataSource.getRepository(Category);

  const categories = [
    { name: "Cows" },
    { name: "Bulls" },
    { name: "Calves" },
    { name: "Heifers" },
    { name: "Steers" }
  ];

  await categoryRepo.save(categories);
  console.log("✅ Seeded categories");
};
