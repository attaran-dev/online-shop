import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

function AdminHeader() {
  let activeClassName = "tab tab-active";

  return (
    <header className="flex justify-between sticky top-0 z-20 bg-white shadow-lg p-6 mb-6">
      <div>پنل مدیریت سایت</div>
      <div>
        <nav className="tabs tabs-boxed">
        <NavLink to="/admin/products" className={({ isActive }) => (isActive ? activeClassName : "tab")}>
            کالاها
          </NavLink>
          <NavLink to="/admin/stock-price" className={({ isActive }) => (isActive ? activeClassName : "tab")}>
            موجودی و قیمت‌ها
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) => (isActive ? activeClassName : "tab")}
          >
            سفارش‌ها
          </NavLink>
        </nav>
      </div>
      <div>
        <Link to="/">بازگشت به سایت</Link>
      </div>
    </header>
  );
}

export default AdminHeader;
