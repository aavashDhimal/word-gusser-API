import { Schema, model, Document } from 'mongoose';

export interface IPoints extends Document {
    userId: String;
    totalPoints: number;
    updatedAt: Date;
    game: String;
}

const PointSchema = new Schema<IPoints>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    totalPoints: {
        type: Number,
        default: Number(0)
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    game: {
        type: String,
        required: true
    }
});

export const PointModal = model<IPoints>("points", PointSchema);
