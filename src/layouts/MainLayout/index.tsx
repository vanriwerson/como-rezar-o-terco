import { Outlet } from "react-router-dom";

import { Footer, PageTitle, AppNavigation } from "../../components";

import "./style.css";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <PageTitle
        title="Santo Terço"
        subtitle="Mostre sua devoção rezando conosco!"
      />

      <AppNavigation />

      <main className="main-layout-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
