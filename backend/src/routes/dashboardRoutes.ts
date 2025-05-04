import { Router } from "express";
import {
  getKpiData,
  getActivityFeed,
  getComplianceOverview,
} from "../controllers/dashboardController";

const router = Router();

router.get("/kpi", getKpiData);
router.get("/activity", getActivityFeed);
router.get("/dashboard/overview/compliance", getComplianceOverview);

export default router;
