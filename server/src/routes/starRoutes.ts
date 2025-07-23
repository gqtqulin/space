import { Router } from "express";
import {
    getAllStars,
    getStarById,
    createStar,
    updateStar,
    deleteStar,
} from "../controllers/starController";

const router = Router();

router.get("/", getAllStars);
router.get("/:id", getStarById);
router.post("/", createStar);
router.put("/:id", updateStar);
router.delete("/:id", deleteStar);

export default router; 