import React, { useEffect, useState } from "react";
import ProductTable from "../../Components/ProductTable/ProductTable";

function ProductsManagement() {
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex flex-row justify-between items-center">
        <div>مدیریت کالاها</div>
        <div>
          <button className="btn btn-primary">افزودن کالا</button>
        </div>
      </div>
      <div>
      <ProductTable />
      </div>
    </div>
  );
}

export default ProductsManagement;
