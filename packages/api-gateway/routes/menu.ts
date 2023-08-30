import express, { Application } from "express";
import { getMenuListData, getMenuFullData } from "../controllers/menuController";
const router = express.Router();


router.get(`/restaurant/:id/:category/menu/short`, getMenuListData)
router.get(`/restaurant/:id/:category/menu/full`, getMenuFullData)


export default router;