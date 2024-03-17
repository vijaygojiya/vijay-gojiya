import { Outlet } from "react-router-dom";
import { BottomTabBar } from "./components";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <main className="contentContainer">
        <Outlet />
      </main>
      <BottomTabBar />
    </div>
  );
};

export default Layout;
