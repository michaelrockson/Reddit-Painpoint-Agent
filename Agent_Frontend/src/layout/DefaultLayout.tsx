import React from "react";
import HeaderBar from "../shared/components/HeaderBar.tsx";
import DashboardPage from "../pages/Dashboard/DashboardPage.tsx";

export default function DefaultLayout(): React.JSX.Element {
  return (
    <>
      <HeaderBar />
      <section className="li-section li-grid li-grid-dashboard">
        <div className="li-container">
          <h1>Sidebar</h1>
        </div>
        <DashboardPage />
      </section>
    </>
  );
}
