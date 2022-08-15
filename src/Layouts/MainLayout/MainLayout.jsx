import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout({ children }) {
  return (
    <div>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
}

export default MainLayout;
