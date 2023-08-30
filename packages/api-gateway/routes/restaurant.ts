import express, { Application } from "express";
import { getRestaurantData } from "../controllers/restaurantController";
const router = express.Router();


router.get(`/restaurant/:id`, getRestaurantData)


export default router;