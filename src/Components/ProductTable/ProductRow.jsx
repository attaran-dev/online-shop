import React from "react";

function ProductRow(props) {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={props.image} alt={props.model} />
            </div>
          </div>
          <div>
            <div className="font-bold">{props.name}</div>
            <div className="text-sm opacity-50">{props.model}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-lg">{props.category}</span>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">ویرایش</button>
        <button className="btn btn-ghost btn-xs">حذف</button>
      </td>
    </tr>
  );
}

export default ProductRow;
