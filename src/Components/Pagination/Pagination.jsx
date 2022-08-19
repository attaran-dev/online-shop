import React, { useEffect, useState, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { getPage, getProducts, getOrders, getOrdersByPage, getDelivered, getNotDelivered } from "../../api/index";

function Pagination(props) {
  const activeClassName = "btn btn-xs btn-active";
  const effectRan = useRef(false);
  const [pageNum, setPageNum] = useState(0);
  const [arrLength, setArrLength] = useState(0);
  const [fil, setFil] = useState(null)
  const [pageButtons, setPageButtons] = useState([]);
  const [path, setPath] = useState(0)
  let { pathname } = useLocation();
  let pathArr = pathname.split('/');

//   const path = pathArr.join('/');
  
  console.log(useLocation());
  //   const currentTab = urlArr[urlArr.length - 1];
  let pageButton = [];
  const createPages = async () => {
let getFunc = getOrders;
    if (props.filtering === 'delivered') {
      getFunc = getDelivered;
    } else if (props.filtering === 'notDelivered') {
      getFunc = getNotDelivered;
    }

    pathArr.pop();
    console.log(path);
    pathArr.join('/') === "/admin/orders/page" &&
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

        pathArr.join('/') === "/admin/products/page" &&
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
      pathArr.join('/') === "/admin/stock-price/page" &&
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
      console.log(pathArr.join('/'));
  };

  //   useEffect(() => {}, [pageNum]);
  //   useEffect(() => {
  //     setPageNum(Math.ceil(arrLength / 5));
  //   }, [arrLength]);

  useEffect(() => {
console.log(props.filtering);
    if (effectRan.current === false) {
      
      createPages().then(()=>setPath(pathArr.join('/')));

      effectRan.current = true;

    }
  });
  console.log(pageButtons);
  console.log(path);
  return (
    <div className="w-full">
      <div className="btn-group" key={`pages-${props.filtering}`}>
        {pageButtons.map((page, index) => {
          return (
            <NavLink
            to={`${path}/${index+1}`}
            className={({ isActive }) => (isActive ? activeClassName : "btn btn-xs")}
              key={`page-${index+1}`}
              id={`page-${index+1}`}
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
