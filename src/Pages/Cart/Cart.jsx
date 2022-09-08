import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../api";
import CartSide from "../../Components/CartSide/CartSide";
import CartTable from "../../Components/CartTable/CartTable";
import SideMenu from "../../Components/SideMenu/SideMenu";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import { getCart } from "../../redux/cart";

function Cart() {
  const {isChanged , productsInCart} = useSelector((state) => state?.cart);
  const [cartSummary, setCartSummary] = useState({});
  const cartSummaryCalc = async () => {
const user = await getUser(10);
const {cart} = user;
let cartLength = cart.length;
      let cartQuantity = 0;
    let cartPriceSum = 0;
  for (let i = 0; i < cart.length; i++) {

    cartQuantity += (+cart[i].quantity);
    cartPriceSum +=
      (+cart[i].price * +cart[i].quantity);
  }
  setCartSummary({cartQuantity, cartPriceSum, cartLength, cart})
}
useEffect(()=>{
  cartSummaryCalc()
},[productsInCart, isChanged])

  return (
    <SideMenu>
      <MainLayout>
        {cartSummary.cartLength <1 &&
        (<div className="flex font-bold h-96 items-center justify-center">
            <p>سبد خریدتان خالی است.</p>
          </div>)}  

        {cartSummary.cartLength >=1 &&
        (<div className="flex justify-between m-8 h-1/2 gap-8">
          <CartTable cartSummary={cartSummary} />
          <CartSide cartSummary={cartSummary} />
        </div>)}
      </MainLayout>
    </SideMenu>
  );
}

export default Cart;
