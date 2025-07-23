import mongoose, { Schema, Document } from "mongoose";

export interface ISystem extends Document {
    name: string;
    description?: string;
    color: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    scale: number;
    createdAt: Date;
    updatedAt: Date;
}

const SystemSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: false,
            trim: true,
        },
        color: {
            type: String,
            required: true,
            default: "#ffffff",
        },
        position: {
            x: { type: Number, required: true, default: 0 },
            y: { type: Number, required: true, default: 0 },
            z: { type: Number, required: true, default: 0 },
        },
        scale: {
            type: Number,
            required: true,
            default: 1,
        },
    },
    { timestamps: true }
);

export default mongoose.model<ISystem>("System", SystemSchema); 