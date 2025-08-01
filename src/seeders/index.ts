import { AppDataSource } from "../config/db";
import { seedCategories } from "./categoryseeder";
import { seedCows } from "./cowseeders";

const runSeeders = async () => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("🚀 Database connected");
    }

    await seedCategories();
    await seedCows();

    console.log("✅ All seeders ran successfully");
  } catch (err) {
    console.error("❌ Seeder failed:", err);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
};

runSeeders();
