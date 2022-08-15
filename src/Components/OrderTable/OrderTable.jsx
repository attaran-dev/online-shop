import React, { useEffect, useState } from "react";
import {getOrders} from "../../api/index"
import OrderRow from "./OrderRow"

function OrderTable() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders().then((data) => {
            setOrders(data);
        });
      }, []);
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
            <th>بررسی سفارش</th>
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
              />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
          <th></th>
            <th>کاربر</th>
            <th>مجموع خرید</th>
            <th>بررسی سفارش</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default OrderTable