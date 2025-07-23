import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import starRoutes from "./routes/starRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/space_editor";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

// Routes
app.use("/api/stars", starRoutes);

// Test endpoint
app.get("/api/test", (req, res) => {
    res.json({ message: "Welcome to Space Editor API!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
