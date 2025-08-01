import { Router } from "express";

import { insertToCart } from "../controllers/cart/inserttocart";
import { getCartByUserId } from "../controllers/cart/getcardbyid";
import { getCartCountByUserId } from "../controllers/cart/count";
import { deleteCartItemById } from "../controllers/cart/removefromcart";
import { deleteAllCartItemsByUserId } from "../controllers/cart/deleteallitems";


const router = Router();


router.post("/cart/insert",insertToCart)
router.post("/cart/itemsbyid",getCartByUserId)
router.post("/cart/countbyuserid",getCartCountByUserId)
router.post("/cart/removebyid",deleteCartItemById)
router.post("/cart/deleteall",deleteAllCartItemsByUserId)



export default router;
