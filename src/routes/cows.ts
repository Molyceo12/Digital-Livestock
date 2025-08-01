import { Router } from "express";
import { getCowById } from "../controllers/cows/getcowbyid";
import { fetchAllCows } from "../controllers/cows/getallcows";
import { createCow } from "../controllers/cows/createnewcow";
import { markCowAsOrdered } from "../controllers/cows/markasordered";
import { markCowAsPurchased } from "../controllers/cows/markcowaspurchased";
import { updateCowById } from "../controllers/cows/editcow";


const router = Router();

router.post("/cows/byid", getCowById);
router.get("/allcows",fetchAllCows);
router.post("/cows/createnew",createCow);
router.post("/cows/markasordered",markCowAsOrdered);
router.post("/cows/markaspurchased",markCowAsPurchased);
router.post("/cows/update",updateCowById);



export default router;
