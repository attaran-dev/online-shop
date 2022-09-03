import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { getUser } from "../../api/index";
import { addToCartAsync,decreaseCartAsync } from "../../redux/cart";

function CartTable({cartSummary}) {

  return (
    <div className="flex flex-1">
      <div className="flex flex-col gap-4 w-full">
        {cartSummary?.cart?.map?.((product, index) => {
          return (
            <div
              key={`product-cart-${index}`}
id={`product-cart-${index}`}
              className="flex border-8 border-double border-primary rounded-lg bg-gray-900 p-4 w-full justify-between"
            >
              <CartItem
                currentProductCart={product}
                index={index}
              />
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default CartTable;
