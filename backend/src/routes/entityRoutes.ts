import { Router } from "express";
import {
  getEntities,
  getEntityById,
  createEntity,
  updateEntity,
  deleteEntity,
} from "../controllers/entityController";

const router = Router();

router.get("/", getEntities);
router.get("/:entity/:id", getEntityById);
router.post("/:entity", createEntity);
router.put("/:entity/:id", updateEntity);
router.delete("/:entity/:id", deleteEntity);

export default router;
