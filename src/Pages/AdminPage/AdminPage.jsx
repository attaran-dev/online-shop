import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem("TOKEN"));

  return (
    <div>
      {token && <Navigate to="/admin/products" />}
      {!token && <Navigate to="/login" />}
    </div>
  );
}

export default AdminPage;
