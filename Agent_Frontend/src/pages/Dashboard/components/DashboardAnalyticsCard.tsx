import React from "react";


export default function DashboardAnalyticsCard({cardTag, cardData, cardStat}): React.JSX.Element {
  return (
    <div className="li-card li-hover-lift">
      <p className="li-text-sm li-text-secondary li-mb-sm">{cardTag}</p>
      <h1 className="li-mb-md">{cardData}</h1>
      <span className="li-stat li-stat-delta">{cardStat}</span>
    </div>
  );
}
