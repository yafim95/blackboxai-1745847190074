import React from "react";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string | number;
  trend?: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, trend }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      {change && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {change} {trend && `(${trend})`}
        </p>
      )}
    </div>
  );
};

export default KPICard;
