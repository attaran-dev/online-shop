import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../Components/SideMenu/SideMenu";

function MainHeader() {
  return (
    <header className="flex justify-between sticky top-0 z-20 bg-white shadow-lg px-10 mb-6">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          
            <div className="h-full flex flex-col"><Link to="/" className="text-xl"><h1 className=" translate-y-6">ملودیکا</h1></Link><label htmlFor="my-drawer-4"><img src="/assets/icons/logo-2.svg" alt="logo" className="w-20 translate-x-2 cursor-pointer hover:scale-[1.3] transition duration-700" /></label></div>
          
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-right"
            >
              <li>
                <a className="justify-between">
                  حساب کاربری
                  <span className="badge">جدید</span>
                </a>
              </li>
              <li>
                <a>تنظیمات</a>
              </li>
              <li>
                <a>خروج</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabindex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">۲</span>
              </div>
            </label>
            <div
              tabindex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg flex gap-1">
                  {/* <span>۲</span>
                  <span>کالا</span> */}
                  ۲ کالا
                </span>
                <span className="text-info">
                  جمع: ۴۵۰۰۰۰۰ تومان
                </span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/admin">مدیریت</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
