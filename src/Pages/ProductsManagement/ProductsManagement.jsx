import React, { useEffect, useState } from "react";
import EditModal from "../../Components/Modal/EditModal";
import Pagination from "../../Components/Pagination/Pagination";
import ProductTable from "../../Components/ProductTable/ProductTable";
import { useDispatch, useSelector } from "react-redux";
import {
  changeApplied,
  getProductsAsync,
  getProductsAsyncByPage,
} from "../../redux/products";
import { useSearchParams } from "react-router-dom";
import AddModal from "../../Components/Modal/AddModal";
import { Toaster } from "react-hot-toast";

function ProductsManagement() {
  const { products, isChanged } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // const SearchParams = useSearchParams()
  useEffect(() => {
    dispatch(getProductsAsync());
  }, [isChanged]);
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex flex-row justify-between items-center">
        <div>
          <label htmlFor="add-modal" className="btn btn-primary" >افزودن کالا</label>
          <AddModal />
        </div>
        <div>مدیریت کالاها</div>
        <div>
          <Pagination />
        </div>
      </div>
      <div>
        <ProductTable />
      </div>
      <div>{/* <EditModal /> */}</div>
    </div>
  );
}

export default ProductsManagement;
