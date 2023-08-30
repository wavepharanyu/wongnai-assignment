import express, { Application } from "express";
import { getMenuShortData, getMenuFullData } from "../controllers/menuController";
const router = express.Router();


router.get(`/restaurant/:id/:category/menu/short`, getMenuShortData)
router.get(`/restaurant/:id/:category/menu/full`, getMenuFullData)


export default router;