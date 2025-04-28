import React from "react";
import { useQuery } from "@tanstack/react-query";
import ComplianceCard from "../components/ComplianceCard";

const Dashboard: React.FC = () => {
  const { data: kpiData, isLoading: kpiLoading } = useQuery({
    queryKey: ["kpiData"],
    queryFn: async () => {
      const response = await fetch("/api/kpi");
      if (!response.ok) throw new Error("Failed to fetch KPI data");
      return response.json();
    },
  });

  const { data: activityData, isLoading: activityLoading } = useQuery({
    queryKey: ["activityFeed"],
    queryFn: async () => {
      const response = await fetch("/api/activity");
      if (!response.ok) throw new Error("Failed to fetch activity data");
      return response.json();
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        {/* Placeholder for GlobalSearch component */}
        <input
          type="search"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {!kpiLoading && Array.isArray(kpiData) &&
          kpiData.map((kpi: any) => (
            <div key={kpi.id} className="p-4 bg-white dark:bg-gray-800 rounded shadow">
              <h3 className="text-lg font-semibold">{kpi.title}</h3>
              <p className="text-2xl font-bold">{kpi.value}</p>
              <p className="text-sm">{kpi.change} ({kpi.trend})</p>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            {/* Placeholder for ActivityFeed component */}
            {!activityLoading && Array.isArray(activityData) ? (
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {activityData.map((activity: any, idx: number) => (
                  <li key={idx}>{activity.description}</li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Compliance Overview</h2>
            <ComplianceCard entityId="overview" entityType="dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
