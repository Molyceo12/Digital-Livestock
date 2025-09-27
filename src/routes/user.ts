import express from "express";

import { signupUser } from "../controllers/auth/signup";
import { signinUser } from "../controllers/auth/signin";
const router = express.Router();

router.post("/api/signup", signupUser); 
router.post("/api/signin", signinUser); 





export default router;
