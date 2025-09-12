import express from "express";
// import { registerUser } from "../controllers/auth/register";
// import { loginUser } from "../controllers/auth/login";
import { signupUser } from "../controllers/auth/signup";
import { signinUser } from "../controllers/auth/signin";
const router = express.Router();


// router.post("api/register", registerUser);
// router.post("api/login", loginUser);
router.post("/api/signup", signupUser); 
router.post("/api/signin", signinUser); 





export default router;
