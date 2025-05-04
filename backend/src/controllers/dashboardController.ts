import { Request, Response } from "express";

export const getKpiData = (req: Request, res: Response) => {
  const kpiData = [
    { id: "1", title: "Total Projects", value: 42, change: "+5%", trend: "up" },
    { id: "2", title: "Active Contracts", value: 17, change: "-2%", trend: "down" },
    { id: "3", title: "Pending Bids", value: 8, change: "+10%", trend: "up" },
  ];
  res.json(kpiData);
};

export const getActivityFeed = (req: Request, res: Response) => {
  const activityData = [
    { description: "Project Alpha was approved." },
    { description: "Contract #123 was signed." },
    { description: "Bid #456 was submitted." },
  ];
  res.json(activityData);
};

export const getComplianceOverview = (req: Request, res: Response) => {
  const complianceData = {
    status: "Compliant",
    issues: [],
  };
  res.json(complianceData);
};
