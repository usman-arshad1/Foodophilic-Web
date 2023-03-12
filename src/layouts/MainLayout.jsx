import SideNavigation from "../components/SideNavigation";
import { Outlet } from "react-router-dom";

import "./../styles/mainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <SideNavigation />
      <Outlet />
    </div>
  );
}

export default MainLayout;
