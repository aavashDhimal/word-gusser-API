import { IPoints, PointModal } from "../model/points-model";
import { PipelineStage } from "mongoose";

interface IPointsQuery {
    game?: string;
    user?: string;
}

export class PointServices {

    async addPoints(data: IPoints) {
        const points = new PointModal(data);
        return points.save();
    }

    async queryPoints(query: IPointsQuery) {
        let pipeline: PipelineStage[] = []
        if (query.game) pipeline.push({ $match: { game: query.game } });
        if (query.user) pipeline.push({ $match: { userId: query.user } })
        pipeline.push(
            {
                $group: {
                    _id: "$userId",
                    totalPoints: { $sum: "$totalPoints" }
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: " _id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind: "$user" },
            {
                $project: {
                    _id: 0,
                    userId: "$_id",
                    totalPoints: 1,
                    name: "$user.name"
                }
            }
        )
        return PointModal.aggregate(pipeline)
    }

    async getPointsByGame(game: string) {
        return this.queryPoints({ game })
    }

    async getPointsByUser(user: string) {
        return this.queryPoints({ user })
    }
}