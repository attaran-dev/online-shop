import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import {getOrders, getOrdersByPage} from "../../api/index"
import OrderRow from "./OrderRow"

function OrderTable(props) {
    const [orders, setOrders] = useState([]);
    // const [filter, setFilter] = useState('');
    // props.filtering === 'all' && setFilter('')
    // props.filtering === 'delivered' && setFilter('isDelivered=true')
    // props.filtering === 'notDelivered' && setFilter('isDelivered=false')
    const [SearchParams] = useSearchParams();
    const [range, setRange] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
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
        getOrdersByPage(page, 'isDelivered=true').then((data) => {
          setOrders(data);
        });
      } else if (props.filtering === 'notDelivered') {
        getOrdersByPage(page, 'isDelivered=false').then((data) => {
          setOrders(data);
        });
      } else {
        getOrdersByPage(page).then((data) => {
          setOrders(data);
        });
      }
      }, [page, props.filtering]);
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
                user={order.userId}
                products={order.productsId}
                orderDate={order.orderDate}
                isDelivered={order.isDelivered}
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