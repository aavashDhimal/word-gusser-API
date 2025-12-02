import { PointServices } from "../services/pointServices";
import { Request, Response } from "express";

export default class PointController {
    private PointServices = new PointServices()

    async addPoints(req: Request, res: Response) {
        const addPoints = await this.PointServices.addPoints(req.body);
        return addPoints;
    }

    async getAllPoints(_: Request, res: Response) {
        const allPoints = await this.PointServices.queryPoints({});
        return allPoints;
    }
    async getPointPerGame(req: Request, res: Response) {
        if (!req.query.game) return "Game is Needed"
        const allPoints = await this.PointServices.getPointsByGame(String(req.query.game));
        return allPoints;
    }
}