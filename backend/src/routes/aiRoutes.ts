import { Router } from "express";
import { analyzeEntity, chatWithAI, streamAIResponse } from "../controllers/aiController";

const router = Router();

router.post("/:entity/analyze", analyzeEntity);
router.post("/:entity/chat", chatWithAI);
router.get("/:entity/stream", streamAIResponse);

export default router;
