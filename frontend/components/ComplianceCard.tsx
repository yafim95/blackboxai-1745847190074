import React from "react";
import { useQuery } from "@tanstack/react-query";

interface ComplianceCardProps {
  entityId: string;
  entityType: string;
}

const fetchComplianceStatus = async (entityType: string, entityId: string) => {
  const response = await fetch(`/api/${entityType}/${entityId}/compliance`);
  if (!response.ok) {
    throw new Error("Failed to fetch compliance status");
  }
  return response.json();
};

const ComplianceCard: React.FC<ComplianceCardProps> = ({ entityId, entityType }) => {
  const { data, error, isLoading } = useQuery(
    ["complianceStatus", entityType, entityId],
    () => fetchComplianceStatus(entityType, entityId)
  );

  if (isLoading)
    return (
      <div className="p-4 bg-gray-100 rounded shadow animate-pulse">Loading...</div>
    );
  if (error)
    return (
      <div className="p-4 bg-red-100 rounded shadow text-red-700">
        Error loading compliance status
      </div>
    );

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">Compliance Status</h3>
      <p className="text-sm">{data.status}</p>
      {data.issues && data.issues.length > 0 && (
        <ul className="mt-2 list-disc list-inside text-sm text-red-600">
          {data.issues.map((issue: string, idx: number) => (
            <li key={idx}>{issue}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComplianceCard;
