import mongoose, { Schema, Document } from "mongoose";

export interface IStar extends Document {
    title: string;
    content: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    scale: number;
    color: string;
    systemId?: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const StarSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
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
        color: {
            type: String,
            required: true,
            default: "#ffffff",
        },
        systemId: {
            type: Schema.Types.ObjectId,
            ref: "System",
            required: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model<IStar>("Star", StarSchema); 