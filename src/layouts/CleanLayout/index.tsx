import { Outlet } from "react-router-dom";

import "./style.css";

export default function CleanLayout() {
  return (
    <div className="clean-layout">
      <main className="clean-layout-content">
        <Outlet />
      </main>
    </div>
  );
}
