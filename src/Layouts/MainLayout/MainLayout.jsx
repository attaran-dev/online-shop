import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout({ children }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}

export default MainLayout;
