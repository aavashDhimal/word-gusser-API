import { Schema, model, Document } from 'mongoose';

export interface IPoints extends Document {
   userId : String;
   totalPoints : number
   updatedAt : Date
}

const UserSchema = new Schema<IPoints>({
    userId: {
        type: String,
        required: true,
        ref : "user"
    },
    totalPoints: {
        type: Number,
        default : Number(0)
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

export const UserModel = model<IPoints>("points", UserSchema);
