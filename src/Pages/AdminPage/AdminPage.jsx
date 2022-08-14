import React from "react";
import {Navigate} from "react-router-dom";

function AdminPage() {
  return (
    <Navigate to="/admin/products" />
  );
}

export default AdminPage;
