import { Router } from "express";
import PointController from "../controller/point-controllers";

const router = Router();
const controller = new PointController();

router.post("/point", controller.addPoints);
router.get("/point", controller.getAllPoints);
router.get("/gamepoint",controller.getPointPerGame)


export default router;
