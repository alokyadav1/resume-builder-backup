import express from "express";
import { saveResume } from "../controllers/resumeController.js";
import authenticateUser from "../middlewares/authenticateUser.js";

const router = express.Router();
router.post("/save",authenticateUser, saveResume);
export default router;