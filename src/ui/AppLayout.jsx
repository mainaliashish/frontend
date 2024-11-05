import React from "react";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";
import AppFooter from "./AppFooter";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <AppHeader />
      <main className="m-1 p-2">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
