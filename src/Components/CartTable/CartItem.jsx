import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getUser } from "../../api";
import { Link } from "react-router-dom";
import { addToCartAsync, decreaseCartAsync, changeApplied } from "../../redux/cart";

function CartItem({ currentProductCart, index }) {

    const productsInCart = useSelector((state) => state?.cart?.productsInCart);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);
    const [user, setUser] = useState({});
    const [product, setProduct] = useState({})


  
    const handleClickSimpleAdd = () => {
        ++document.getElementById(`item-cart-${index}`).value;
        // console.log(tempQuantity);
        // tempQuantity;
        // setQuantity(++tempQuantity);
        dispatch(addToCartAsync({ user, product }));

    };

    const handleClickDecrease = () => {
        console.log({user, product });
       
        let tempQuantity = +document.getElementById(`item-cart-${index}`).value;

        // console.log(tempQuantity);
        if(tempQuantity === 1){
            document.getElementById(`product-cart-${index}`).classList.add("hidden");
          }
 --document.getElementById(`item-cart-${index}`).value;
        //   tempQuantity;
        //   setQuantity(--tempQuantity)
        //   console.log(quantity);
          dispatch(decreaseCartAsync({user, product }));
          dispatch(changeApplied())
      
    };


    useEffect(() => {

        getProduct(currentProductCart.productId).then((productItem) => setProduct(productItem));
      getUser(10).then((user) => setUser(user));
      setQuantity(+document.getElementById(`item-cart-${index}`).value)
      console.log(productsInCart);
      console.log(currentProductCart);
      console.log(quantity);
    },[quantity, productsInCart]);
  

    console.log({ currentProductCart, product, productsInCart, quantity});
  return (
    <>
      <Link to={`/product/${currentProductCart.productModel.replaceAll(' ', '-').toLowerCase()}`} state={{id: currentProductCart.productId}}>
      <div className="flex flex-row gap-4">
        <div className="mask mask-squircle w-16 h-16">
          <img
            src={currentProductCart.image}
            alt={currentProductCart.productModel}
            className="bg-white p-4"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="text-primary">{currentProductCart.productName}</div>
          <div className="text-base-200 text-sm">{currentProductCart.productModel}</div>
        </div>
      </div>
      </Link>
      <div className="flex self-center">
        <div className="flex gap-4 items-center">
          <div>
          <div className="flex flex-row-reverse gap-4">
          <span><p className="text-base-200 text-sm"> {currentProductCart.price} تومان </p></span><span><p className="text-base-200 text-sm"> قیمت واحد: </p></span>
          </div>
          <div className="flex flex-row-reverse gap-4"><span><p className="text-base-200 text-sm">{(+currentProductCart.price)*(+quantity)} تومان </p></span><span><p className="text-base-200 text-sm">مجموع قیمت: </p></span></div>
</div>
          <div
            id="cart-handling"
            className="flex justify-center items-center gap-4"
          >
            <div id="order-number" className="h-12 flex gap-2 justify-center">
              <span
                className={`font-bold text-lg btn btn-primary ${quantity == product.availableQuantity ? `btn-disabled` : null}`}
                onClick={()=>handleClickSimpleAdd()}
              >
                +
              </span>
              <input
                type="text"
                name="quantity"
                id={`item-cart-${index}`}
                // min={1}
                // max={product.availableQuantity}
                className="h-full rounded-lg p-4 w-16"
                defaultValue={+currentProductCart.quantity}
              />
              <span
                className="font-bold text-lg btn btn-primary"
                onClick={()=>handleClickDecrease()}
              >
                -
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
