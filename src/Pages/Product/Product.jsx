import React, { useEffect, useMemo, useState } from "react";
import { getProduct, postProductToCart, getUser } from "../../api/index";
import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAsync, decreaseCartAsync, changeApplied } from "../../redux/cart";

function Product() {
  const productsInCart = useSelector((state) => state?.cart?.productsInCart);

  const location = useLocation();
  const model = useParams();
  const { id } = location.state;
  const [product, setProduct] = useState({});
  const [user, setUser] = useState({});

  const [currentProductCart, setCurrentProductCart]= useState({});

  //   const currentProductCart = useMemo(() => {
  //   return productsInCart?.find((value) => value.productId == product.id);
  // }, [productsInCart, product]);

  const dispatch = useDispatch();


  // const handleChange = (e) => {};

 const findCurrentProductInCart = async () =>{
  const currentProduct = await productsInCart?.find((value) => value.productId == product.id);
  // if(currentProduct.quantity.length > 0){
  //   document.getElementById('add-to-cart-btn').classList.add('hidden');
  //   document.getElementById("order-number").classList.remove('hidden');
  // }
  return currentProduct;
 }
  const [quantity, setQuantity] = useState(0);


  const createProductPage = async () => {};

  useEffect(() => {
    getProduct(id).then((productItem) => setProduct(productItem));
    getUser(10).then((user) => setUser(user));
    findCurrentProductInCart()
    .then((currentProduct)=>{setCurrentProductCart(currentProduct);setQuantity(currentProduct.quantity)})
  }, [currentProductCart, productsInCart]);


  const handleClickAddToCart = () => {
    
    document.getElementById('add-to-cart-btn').classList.add('hidden');
    document.getElementById("order-number").classList.remove('hidden');

    let tempQuantity = +currentProductCart?.quantity;
    dispatch(addToCartAsync({ user, product }));
    setQuantity(++tempQuantity)
  };

  const handleClickSimpleAdd = () => {
    let tempQuantity = +currentProductCart?.quantity;
    dispatch(addToCartAsync({ user, product }));
    setQuantity(++tempQuantity)
  };

  const handleClickDecrease = () => {
    let tempQuantity = +quantity;
    if(tempQuantity === 1){
      document.getElementById("order-number").classList.add("hidden");
      document.getElementById('add-to-cart-btn').classList.remove('hidden');
    }
    setQuantity(--tempQuantity)
    
    dispatch(decreaseCartAsync({ user, product }));
    dispatch(changeApplied())

  };




  
  console.log({ currentProductCart, product, productsInCart, id });

  return (
    <SideMenu>
      <MainLayout>
        <div className="m-8">
          <div className="flex bg-gray-900 rounded p-8 h-[560px]">
            <div className="flex flex-col justify-center items-center w-1/3 gap-4">
              <h2 className="text-primary text-xl font-bold">{product.name}</h2>
              <h3 className="text-base-300">{product.model}</h3>
              <div className="text-base-100">{product.price} تومان</div>
              <div
                id="cart-handling"
                className="flex justify-center items-center gap-4"
              >
                                {(
                  <div
                    id="add-to-cart-btn"
                    className={`btn btn-primary`}
                    onClick={handleClickAddToCart}
                  >
                    افزودن به سبد
                  </div>
                )}

                {
                // currentProductCart?.quantity  && 
                (
                  <div
                    id="order-number"
                    className="h-12 flex gap-2 justify-center hidden"
                  >
                    <span
                      className={`font-bold text-lg btn btn-primary ${currentProductCart?.quantity == product?.availableQuantity ? `btn-disabled` : null}`}
                      onClick={()=>handleClickSimpleAdd()}
                    >
                      +
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      min={1}
                      max={product.availableQuantity}
                      className="h-full rounded-lg p-4 w-16"
                      value={quantity}
                      // onChange={(e) => handleChange(e)}
                    />

                    <span
                      className="btn btn-primary"
                      onClick={()=>handleClickDecrease()}
                    >
                      -
                    </span>
                  </div>
                )}

              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-1/3">
              <div className="product-main-image h-1/2 m-3 p-6 bg-base-100 rounded">
                <img
                  src={product.image}
                  alt={`${model}-1`}
                  className="h-full"
                />
              </div>
              <div className="product-images h-28 flex">
                {/* {console.log(otherImages)} */}

                {/* {product.images.map((img, index) => {
                  console.log(product.images);
                  return (
                    <img
                      src={`${img}`}
                      alt={`${model}-${index + 2}`}
                      className="h-full w-full"
                      
                    />
                  );
                })} */}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-1/3 text-base-100 p-8 text-justify">
              {product.description}
            </div>
          </div>
        </div>
      </MainLayout>
    </SideMenu>
  );
}

export default Product;
