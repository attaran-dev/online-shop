import React, { useEffect, useState } from "react";
import { getUser, getProduct } from "../../api/index";

function OrderRow(props) {
    let [username, setUsername]=useState('');
    let [priceArr, setPriceArr] = useState([])
    let products = props.products;
    useEffect(() =>{
        getUser(props.user).then((user) => {
            setUsername(user.username);
        })
        for (let i=0; i<products.length; i++){
            getProduct(products[i]).then((product) => {
                setPriceArr(...priceArr, product.price);
                
            })
        }
        console.log(priceArr);
    }, [])

  
  let sum = '';
  for (let value of priceArr) {
    sum += value;
  }
  let date = props.orderDate.replaceAll('-', '/')
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div>{username}</div>
      </td>
      <td>
        <div> {sum} تومان </div>
      </td>
      <td>
        <div>
            {date}
        </div>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">بررسی سفارش</button>
      </td>
    </tr>
  );
}

export default OrderRow;
