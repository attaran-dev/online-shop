import React from "react";
import { useEffect, useState } from "react";
import OrderTable from "../../Components/OrderTable/OrderTable";
import Pagination from "../../Components/Pagination/Pagination";
import Filtering from "../../Components/Filtering/Filtering";

function Orders() {
  const [selectValue, setSelectValue] = useState("");
  const [filter, setFilter] = useState("");
useEffect(()=>{
  // console.log(selectValue)
  console.log(filter)
})
  const handleChangeFilter = (e) => {
    console.log(e.target.value);
  //  setSelectValue(e.target.value)
  setFilter(e.target.value)
      
    
    
    // document.getElementById(`page-${currentPage}`).classList.add('btn-active')
    // console.log(e.target.innerHTML);
  };
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex flex-row justify-between items-center">
        <div>
          <Filtering changeFilter={handleChangeFilter} value={filter}/>
        </div>
        <div>
          <Pagination filtering={filter} />
        </div>
      </div>
      <div>
        <OrderTable filtering={filter} />
      </div>
    </div>
  );
}

export default Orders;
