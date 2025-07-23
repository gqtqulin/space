import { Request, Response } from "express";
import Star, { IStar } from "../models/Star";

// Get all stars
export const getAllStars = async (req: Request, res: Response) => {
    try {
        const stars = await Star.find();
        res.json(stars);
    } catch (error) {
        res.status(500).json({ message: "Error fetching stars", error });
    }
};

// Get star by ID
export const getStarById = async (req: Request, res: Response) => {
    try {
        const star = await Star.findById(req.params.id);
        if (!star) {
            return res.status(404).json({ message: "Star not found" });
        }
        res.json(star);
    } catch (error) {
        res.status(500).json({ message: "Error fetching star", error });
    }
};

// Create new star
export const createStar = async (req: Request, res: Response) => {
    try {
        const star = new Star(req.body);
        const savedStar = await star.save();
        res.status(201).json(savedStar);
    } catch (error) {
        res.status(400).json({ message: "Error creating star", error });
    }
};

// Update star
export const updateStar = async (req: Request, res: Response) => {
    try {
        const star = await Star.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!star) {
            return res.status(404).json({ message: "Star not found" });
        }
        res.json(star);
    } catch (error) {
        res.status(400).json({ message: "Error updating star", error });
    }
};

// Delete star
export const deleteStar = async (req: Request, res: Response) => {
    try {
        const star = await Star.findByIdAndDelete(req.params.id);
        if (!star) {
            return res.status(404).json({ message: "Star not found" });
        }
        res.json({ message: "Star deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting star", error });
    }
}; 