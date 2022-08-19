import React from "react";

function Filtering(props) {
  return (
    <div>
        <label htmlFor="filter">فیلتر سفارش‌ها</label>
      <select id="filter" className="select select-bordered w-full max-w-xs" onChange={props.changeFilter} value={props.value}>
        <option value="all">
          همه
        </option>
        <option value="notDelivered">تحویل‌نشده</option>
        <option value="delivered">تحویل‌شده</option>
      </select>
    </div>
  );
}

export default Filtering;
