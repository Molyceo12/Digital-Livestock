import { Router } from "express";
import { getAllCategories } from "../controllers/categories/category";


const router = Router();


router.get("/categories/all",getAllCategories)



export default router;
