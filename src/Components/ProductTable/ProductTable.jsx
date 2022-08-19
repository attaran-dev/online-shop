import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getProducts, getProductsByPage } from "../../api/index";
import ProductRow from "./ProductRow";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProductsByPage(id).then((data) => {
      setProducts(data);
    });
  }, [id]);
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
          {products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                model={product.model}
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
