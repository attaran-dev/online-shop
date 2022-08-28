import React, { useEffect, useState } from "react";
import { getProduct, postProductToCart, getUser } from "../../api/index";
import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import SideMenu from "../../Components/SideMenu/SideMenu";

function Product(props) {
  const location = useLocation();
  const model = useParams();
  const { id } = location.state;
  const [product, setProduct] = useState({});
  const [otherImages, setOtherImages] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [primaryCart, setprimaryCart] = useState([getUser(10)]);
  // const [numProductInCart, setNumProductInCart] = useState("");

  const handleClickAddToCart = () => {
    document.getElementById("order-number").classList.remove("hidden");
    document.getElementById("add-to-cart-btn").classList.add("hidden");
    setQuantity(1);
  };

  const handleClickSimpleAdd = () => {
    let tempQuantity = +quantity;
    setQuantity(++tempQuantity);
  };

  const handleClickDecrease = () => {
    getUser(10).then((user) => postProductToCart(10, { cart: [] }));
    let tempQuantity = +quantity;
    tempQuantity === 1 &&
      document.getElementById("order-number").classList.add("hidden");
    tempQuantity === 1 &&
      document.getElementById("add-to-cart-btn").classList.remove("hidden");
    setQuantity(--tempQuantity);
  };

  const handleChange = (e) => {
    // setQuantity(e.target.value);
    console.log(e.target.value);
  };

  // const handleClick = () => {
  //   const productInCart = {
  //     productId: product.id,
  //     productName: product.name,
  //     productModel: product.model,
  //     quantity: quantity,
  //     price: product.price,
  //   };
  //   getUser(10).then((user) =>
  //   postProductToCart(10, { cart: [...user.cart, productInCart] })
  // );

  // };

  const createProductPage = async () => {
    await getProduct(id).then((productItem) => setProduct(productItem));
    // .then(() => setOtherImages([...product.images]));
  };

  useEffect(() => {
    createProductPage();
    const productInCart = {
      productId: product.id,
      productName: product.name,
      productModel: product.model,
      quantity: document.getElementById("quantity").value,
      price: product.price,
    };
    getUser(10).then((user) => {
      console.log(user.cart.length);
      if (+quantity > 0) {
        console.log("firstif");
        if (user.cart.length === 0) {
          console.log("secondif");
          postProductToCart(10, { cart: [productInCart] });
        } else if (user.cart.length > 0) {
          console.log("thirdif");
          for (let i = 0; i <= user.cart.length; i++) {
            if (+user.cart[i].productId === +product.id) {
              user.cart.splice(i, 1, productInCart);
              console.log("fourthif");
              postProductToCart(10, {
                cart: user.cart
              });
            } else {
              console.log("fifthif");
              postProductToCart(10, { cart: [...user.cart, productInCart] });
            }
          }
        }
      } else {
        // postProductToCart(10, { cart: [...primaryCart.cart] });
        if (user.cart.length > 0) {
          for (let i = 0; i <= user.cart.length; i++) {
            if (+user.cart[i].productId === +product.id) {
              user.cart.splice(i, 1);
              postProductToCart(10, {
                cart: user.cart
              });
            }
          }
        }
      }
      // postProductToCart(10, { cart: [] })
    });
    // console.log(otherImages)
  }, [quantity]);

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
                <div id="order-number" className="hidden h-12 flex gap-2 justify-center">
                  <span
                    className=" btn btn-primary"
                    onClick={handleClickSimpleAdd}
                  >
                    +
                  </span>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    // min={1}
                    // max={product.availableQuantity}
                    className="h-full rounded-lg p-4 w-16"
                    value={quantity}
                    onChange={(e) => handleChange(e)}
                  />

                  <span
                    className="btn btn-primary"
                    onClick={handleClickDecrease}
                  >
                    -
                  </span>
                </div>
                <div
                  id="add-to-cart-btn"
                  className="btn btn-primary"
                  onClick={handleClickAddToCart}
                >
                  افزودن به سبد
                </div>
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
                {console.log(otherImages)}
                {otherImages.map((img) => {
                  return `${img}`;
                })}
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
