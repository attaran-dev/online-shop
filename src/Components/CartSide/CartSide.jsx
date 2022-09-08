import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { getUser } from '../../api';
import CheckoutModal from '../Modal/CheckoutModal';

function CartSide({cartSummary}) {

//     const [cartSummary, setCartSummary] = useState({});
//     const cartSummaryCalc = async () => {
// const user = await getUser(10);
// const {cart} = user;
// let cartLength = cart.length;
//         let cartQuantity = 0;
//       let cartPriceSum = 0;
//     for (let i = 0; i < cart.length; i++) {
  
//       cartQuantity += (+cart[i].quantity);
//       cartPriceSum +=
//         (+cart[i].price * +cart[i].quantity);
//     }
//     setCartSummary({cartQuantity, cartPriceSum, cartLength})
//   }
//  useEffect(()=>{
//     cartSummaryCalc()
//  },[])

  return (
    <div className="flex flex-col gap-4 w-60 bg-base-200 p-8 h-96 rounded-lg">
        <div className="font-extrabold text-lg">مجموع خرید:</div>
        <div  className="font-extrabold text-sm">  {cartSummary.cartPriceSum} تومان</div>
        <div>
        <label htmlFor={`checkout-modal`} className="btn btn-primary modal-button w-full">نهایی‌کردن سفارش</label>
        <CheckoutModal cart={cartSummary.cart} />
        </div>
    </div>
  )
}

export default CartSide