import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useSearchParams} from "react-router-dom"
import {getOrders, getOrdersByPage} from "../../api/index";

import OrderRow from "./OrderRow";


function OrderTable(props) {
  const {isChanged} = useSelector((state) => state?.cart)
    const [orders, setOrders] = useState([]);
    // const [filter, setFilter] = useState('');
    // props.filtering === 'all' && setFilter('')
    // props.filtering === 'delivered' && setFilter('isDelivered=true')
    // props.filtering === 'notDelivered' && setFilter('isDelivered=false')
    const [searchParams] = useSearchParams();
    const [range, setRange] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      // setPage(searchParams.get("page"));
      console.log(searchParams.get("page"));
      console.log(props.filtering);
      // props.filtering === 'all' &&
      //   getOrdersByPage(id, '').then((data) => {
      //       setOrders(data);
      //   });
      //   props.filtering === 'delivered' &&
      //   getOrdersByPage(id, 'isDelivered=true').then((data) => {
      //       setOrders(data);
      //   });
      //   props.filtering === 'notDelivered' &&
      //   getOrdersByPage(id, 'isDelivered=false').then((data) => {
      //       setOrders(data);
      //   })
      if (props.filtering === 'delivered') {
        getOrdersByPage(searchParams.get("page") === "" ? 1 : searchParams.get("page"), 'isDelivered=true').then((data) => {
          setOrders(data);
        });
      } else if (props.filtering === 'notDelivered') {
        getOrdersByPage(searchParams.get("page") === "" ? 1 : searchParams.get("page"), 'isDelivered=false').then((data) => {
          setOrders(data);
        });
      } else {
        getOrdersByPage(searchParams.get("page") === "" ? 1 : searchParams.get("page")).then((data) => {
          setOrders(data);
        });
      }
      }, [page, searchParams.get("page"), props.filtering, isChanged]);
  return (
<div className="overflow-x-auto w-full mb-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>کاربر</th>
            <th>مجموع خرید</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <OrderRow
                key={order.id}
                // id={order.id}
                // firstname={order.firstname}
                // products={order.productsId}
                // orderDate={order.orderDate}
                // isDelivered={order.isDelivered}
                order={{...order}}
              />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
          <th></th>
            <th>کاربر</th>
            <th>مجموع خرید</th>
            <th>زمان ثبت سفارش</th>
            <th>وضعیت</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default OrderTable