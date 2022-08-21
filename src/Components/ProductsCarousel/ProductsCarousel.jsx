import React, { useEffect, useState } from "react";
import { getProductsByfilter } from "../../api/index";
import ProductCard from "../ProductCard/ProductCard";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function ProductsCarousel(props) {
  const [products, setProducts] = useState([]);
  const createCarousel = async () => {
    await getProductsByfilter(props.filter, props.value, props.limit).then((data) =>
      setProducts(data)
    );
  };
  useEffect(() => {
    createCarousel();
  }, []);
  return (
    <div className="relative w-full flex flex-col items-center">
        <div className="m-12 h-80 w-full">
<div className="border-y-8 h-1/4"></div>
<div className="border-b-8 h-1/4"></div>
<div className="border-b-8 h-1/4"></div>
<div className="border-b-8 h-1/4"></div>
        </div>
    <div className="flex flex-wrap gap-8 absolute top-0">
{/* <AnimationOnScroll animateIn="animate__fadeInRight"> */}
      {products.map((product, index) => {
        return <ProductCard key={`${props.value}-${index}`} name={product.name} model={product.model} image={product.image} price={product.price} />;
      })}

      {/* </AnimationOnScroll> */}
      <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="clef animate__animated animate__fadeInRight">
            <img src={`assets/icons/${(props.id === 1 && `G`) || (props.id === 2 && `C`) || (props.id === 3 && `F`)}Clef.svg`} alt={`Clef-${props.id}`} className={`${(props.id === 1 && `h-96`) || (props.id === 2 && `h-72 translate-y-16`) || (props.id === 3 && `h-72 translate-y-16`)} hover:-rotate-6 transition duration-1000`}/>
        </div>
        </AnimationOnScroll>
    </div>
    <div className="carouselTitle btn font-bold btn-primary  px-4 py-2">
        {props.value}
    </div>
    </div>
  );
}

export default ProductsCarousel;
