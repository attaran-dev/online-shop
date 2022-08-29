import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync, getProductsAsyncByPage, saveClick } from "../../redux/products";
import Pagination from "../../Components/Pagination/Pagination";
import StockPriceTable from "../../Components/StockPriceTable/StockPriceTable";

function StockPriceManagement() {
  const { products, isSaveClicked } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const [saveClicked, setSaveClicked] = useState(false)
  useEffect(() => {
    dispatch(getProductsAsync())
    console.log(isSaveClicked);
    
  },[products])
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex justify-between items-center">
        <div>
          <button className="btn btn-primary" onClick={()=>dispatch(saveClick(true))}>ذخیره</button>
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
