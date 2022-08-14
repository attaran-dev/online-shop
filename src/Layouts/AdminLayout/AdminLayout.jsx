import React from "react";
import  AdminHeader  from "./components/AdminHeader";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;
