import React from "react";

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
            <li dir="ltr" className="border-2 rounded">
              <a>پیانو</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>گیتار</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>درامز</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded invisible">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>ویولن</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>ویولا</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>آکاردئون</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>هارمونیکا</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded invisible">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>ترومپت</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>فلوت</a>
            </li>
            <div className="w-1/2 h-6 bg-black absolute bottom-0 translate-y-1/2 z-10 flex items-end justify-end rounded">
              <div className="h-0.5 w-5/6 z-30 bg-gradient-to-r from-gray-300 rounded-full -translate-y-1 translate-x-1.5"></div>
            </div>
          </div>
          <div className="relative">
            <li dir="ltr" className="border-2 rounded">
              <a>کلارینت</a>
            </li>
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
