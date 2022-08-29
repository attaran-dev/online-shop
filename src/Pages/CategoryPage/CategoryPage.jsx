import { allow } from "joi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByfilter } from "../../api/index";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SideMenu from "../../Components/SideMenu/SideMenu"
import MainLayout from "../../Layouts/MainLayout/MainLayout"

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(()=>{
getProductsByfilter("categoryEn", category, "").then((data)=>setProducts(data))
console.log(category);
console.log(products);
  }, [category])
  return (
<SideMenu>
<MainLayout>
    <div className="flex gap-8 flex-wrap justify-center m-8">
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index + 1}
            id={index + 1}
            productId={product.id}
            name={product.name}
            model={product.model}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </div>
</MainLayout>
</SideMenu>
  );
}

export default CategoryPage;
