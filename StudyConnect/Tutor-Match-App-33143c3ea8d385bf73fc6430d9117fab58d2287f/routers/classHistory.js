import express from "express";
const router = express.Router();
import {addReview} from "../controllers/classHistory.js";

/**
 * function that adds comment to tutors DB
 */
router.post("/api/addReview", addReview);

export default router;
