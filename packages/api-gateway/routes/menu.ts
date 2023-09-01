import express, { Application } from "express";
import { getMenuListData, getMenuDetailData } from "../controllers/menuController";
const router = express.Router();


router.get(`/restaurant/:id/:category/menulist`, getMenuListData)
router.get(`/restaurant/:id/menu/:menu`, getMenuDetailData)


export default router;