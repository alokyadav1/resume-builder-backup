import express from "express"
import { loginUser, registerUser, getUser } from "../controllers/userController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/user", authenticateUser, getUser);

export default router;