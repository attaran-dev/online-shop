import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getProducts, getProductsByPage } from "../../api/index";
import { getProductsAsync } from "../../redux/products";
import ProductRow from "./ProductRow";

function ProductTable() {
  // const [products, setProducts] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [range, setRange] = useState([]);
  const [page, setPage] = useState(1);
  // const { page } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("page"));

  const showProducts = (page, limit) => {
    if (page === null){
      const pRange = products.slice(0, +limit);
      setRange(pRange);
    } else{
      const pRange = products.slice((+page - 1)*(+limit), ((+page - 1)*(+limit)) + +limit);
      setRange(pRange);
    }
    
  };

  useEffect(() => {
    // dispatch(getProductsAsync(searchParams.get('page')));
    console.log(products);
    // page !== 1 ? setPage(searchParams.get("page")) : setPage(1);
    showProducts(searchParams.get("page"), 5);
    console.log(searchParams.get("page"));
    // getProductsByPage(id).then((data) => {
    //   setProducts(data);
    // });
  }, [page, products, searchParams]);

  return (
    <div className="overflow-x-auto w-full mb-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>کالا</th>
            <th>دسته‌بندی</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {range.map((product) => {
            return (
              <ProductRow
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                availableQuantity={product.availableQuantity}
                images={product.images}
                price={product.price}
                image={product.image}
                model={product.model}
                description={product.description}
              />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>نام کاربر</th>
            <th>دسته‌بندی</th>
            <th>عملیات</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ProductTable;
