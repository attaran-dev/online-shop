import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { getProducts, getProductsByPage } from "../../api/index";
import StockPriceRow from "./StockPriceRow";

function StockPriceTable() {
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
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <StockPriceRow
                key={product.id}
                name={product.name}
                model={product.model}
                price={product.price}
                image={product.image}
                stock={product.availableQuantity}
              />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default StockPriceTable;
