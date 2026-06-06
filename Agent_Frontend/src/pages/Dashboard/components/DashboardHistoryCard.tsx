import React from "react";
import type { Record } from "../models/DashboardModels.ts";

interface Props {
  record: Record[];
}

export default function DashboardHistoryCard({ record }: Props): React.JSX.Element {
  return (
    <section className="li-section-sm">
      <div className="li-card li-hover-lift">
        <h3 className="li-mb-md">Recent Findings</h3>

        <div className="li-table-container">
          <table className="li-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {record.map((row) => (
                <tr key={row.id}>
                  <td>{row.title}</td>
                  <td>{row.content}</td>
                  <td>{row.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
