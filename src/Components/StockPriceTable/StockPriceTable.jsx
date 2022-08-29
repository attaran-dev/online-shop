import React, { useEffect, useState } from "react";
import {useParams, useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByPage } from "../../api/index";

import StockPriceRow from "./StockPriceRow";

function StockPriceTable() {
    const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [range, setRange] = useState([]);
  const [page, setPage] = useState(1);
  // const [products, setProducts] = useState([]);
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

    showProducts(searchParams.get("page"), 5);

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
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {range.map((product) => {
            return (
              <StockPriceRow
                key={product.id}
                id={product.id}
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
