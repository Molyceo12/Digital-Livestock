import { Router } from "express";

import { createOrder } from "../controllers/orders/createorders";



const router = Router();


router.post("/order/create",createOrder)




export default router;
