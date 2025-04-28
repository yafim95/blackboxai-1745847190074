import React from "react";

interface Activity {
  id: string;
  description: string;
  timestamp?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.description} {activity.timestamp && <span className="text-xs text-gray-500">({activity.timestamp})</span>}
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;
