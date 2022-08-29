import React from "react";
import { Link } from "react-router-dom";
function SideMenu({ children }) {
  return (
    <div
      className="drawer blur-2xl transition duration-1000"
      onLoad={() => {
        setTimeout(() => {
          document
            .getElementById("category-list")
            .classList.remove("invisible");
          document
            .getElementsByClassName("drawer")[0]
            .classList.remove("blur-2xl");
        }, 1000);
      }}
    >
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul
          id="category-list"
          className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content invisible"
        >
          <div className="m-4 font-bold">دسته‌بندی</div>
          {/* <!-- Sidebar content here --> */}
          <div className="relative">
            <Link  to="/products/piano">
              <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700">
                پیانو
              </li>
            </Link>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <Link  to="/products/guitar">
              <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700">
                گیتار
              </li>
            </Link>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <Link  to="/products/drums">
              <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700">
                درامز
              </li>
            </Link>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded invisible">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <Link  to="/products/bowed-string">
              <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700">
                سازهای آرشه‌ای
              </li>
            </Link>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <Link  to="/products/wind-instrument">
              <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700">
                سازهای بادی
              </li>
            </Link>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700"> </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700"> </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded invisible">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700"> </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700"> </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li className="border-2 rounded h-14 text-left justify-center pl-4 hover:bg-base-200 transition duration-700"> </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded invisible">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
