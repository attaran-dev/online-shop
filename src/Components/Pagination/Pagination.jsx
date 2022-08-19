import React, { useEffect, useState, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  getPage,
  getProducts,
  getOrders,
  getOrdersByPage,
  getDelivered,
  getNotDelivered,
} from "../../api/index";

function Pagination(props) {
  const activeClassName = "btn btn-xs btn-active";
  const effectRan = useRef(false);
  const [pageNum, setPageNum] = useState(0);
  const [arrLength, setArrLength] = useState(0);
  const [fil, setFil] = useState(null);
  const [pageButtons, setPageButtons] = useState([]);
  
  let { pathname } = useLocation();
  
  const [path, setPath] = useState(`${pathname.split('/').slice(0, -1).join('/')}`);
  // let pathArr = pathname.split("/");
  // let pathArr2 = pathArr;

  //   const path = pathArr.join('/');

  console.log(useLocation());
  //   const currentTab = urlArr[urlArr.length - 1];
  let pageButton = [];
  const createPages = async () => {
    let getFunc = getOrders;
    console.log(pathname.split('/').slice(0, -1).join('/'));
    console.log(props.filtering);
    if (props.filtering === "delivered") {
      getFunc = getDelivered;
      console.log("delivered");
    } else if (props.filtering === "notDelivered") {
      getFunc = getNotDelivered;
      console.log("Not delivered");
    }


    console.log(path);
    path === "/admin/orders/page" &&
      (await getFunc()
        .then((data) => {
          return Math.ceil(data.length / 5);
        })
        .then((page) => {
          console.log(page);
          for (let i = 1; i <= page; i++) {
            pageButton.push(i);
          }
          setPageButtons(pageButton);
          return pageButton;
        })
        .then((pageButtons) => {
          console.log(pageButtons);
          // setPageButtons(pageButton);
        }));

    path === "/admin/products/page" &&
      (await getProducts()
        .then((data) => {
          return Math.ceil(data.length / 5);
        })
        .then((page) => {
          console.log({ page });
          for (let i = 1; i <= page; i++) {
            pageButton.push(i);
          }
          setPageButtons(pageButton);
          return pageButton;
        })
        .then((pageButtons) => {
          console.log(pageButtons);
          // setPageButtons(pageButton);
        }));
    path === "/admin/stock-price/page" &&
      (await getProducts()
        .then((data) => {
          return Math.ceil(data.length / 5);
        })
        .then((page) => {
          console.log(page);
          for (let i = 1; i <= page; i++) {
            pageButton.push(i);
          }
          setPageButtons(pageButton);
          return pageButton;
        })
        .then((pageButtons) => {
          console.log(pageButtons);
          // setPageButtons(pageButton);
        }));
    console.log(path);
  };

  //   useEffect(() => {}, [pageNum]);
  //   useEffect(() => {
  //     setPageNum(Math.ceil(arrLength / 5));
  //   }, [arrLength]);

  useEffect(() => {
    console.log(props.filtering);
    // if (effectRan.current === false) {
      console.log(pathname)
      // console.log(pathArr);
      createPages()
      // .then(() => setPath(path));
      console.log(path)

    //   effectRan.current = true;
    // }
  }, [pathname, props.filtering]);
  console.log(pageButtons);
  console.log(pathname);
  // console.log(pathArr);
  console.log(path);
  return (
    <div className="w-full">
      <div className="btn-group" key={`pages-${props.filtering}`}>
        {pageButtons.map((page, index) => {
          return (
            <NavLink
              to={`${path}/${index + 1}`}
              className={({ isActive }) =>
                isActive ? activeClassName : "btn btn-xs"
              }
              key={`page-${index + 1}`}
              id={`page-${index + 1}`}
              onClick={props.pageClick}
            >
              {page}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
