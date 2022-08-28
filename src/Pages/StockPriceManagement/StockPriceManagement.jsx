import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync, getProductsAsyncByPage } from "../../redux/products";
import Pagination from "../../Components/Pagination/Pagination";
import StockPriceTable from "../../Components/StockPriceTable/StockPriceTable";

function StockPriceManagement() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAsync())
    
  },[products])
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex justify-between items-center">
        <div>
          <button className="btn btn-primary">ذخیره</button>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
      <StockPriceTable />
    </div>
  );
}

export default StockPriceManagement;
