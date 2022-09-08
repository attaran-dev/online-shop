import React, { useEffect, useState } from "react";
import { getUser, getProduct } from "../../api/index";
import CheckOrderModal from "../Modal/CheckOrderModal";

function OrderRow({order}) {
    const [sumPrice, setSumPrice] = useState(0);
    // let [ifDelivered, setIfDelivered] = useState('');
    useEffect(() =>{
        // getUser(props.user).then((user) => {
        //     setUsername(user.username);
            // user.isDelivered === true && setIfDelivered('تحویل‌شده');
            // user.isDelivered === false && setIfDelivered('تحویل‌نشده');
        // })
        let sum = 0;
      for (const item of order.cart) {
        sum += (+item.quantity)*(+item.price)
      }
      setSumPrice(sum);

    }, [sumPrice])


  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div>{order.firstname} {order.lastname}</div>
      </td>
      <td>
        <div> {sumPrice} تومان </div>
      </td>
      <td>
        <div>
            {order.pickedDate}
        </div>
      </td>
      <td>
        <div>
          {order.isDelivered === true && 'تحویل‌شده'}
          {order.isDelivered === false && 'تحویل‌نشده'}
        </div>
      </td>
      <td>
        <label htmlFor={`check-order-modal-${order.id}`} className="btn btn-ghost btn-xs" >بررسی سفارش</label>
        <CheckOrderModal order={order} />
      </td>
    </tr>
  );
}

export default OrderRow;
