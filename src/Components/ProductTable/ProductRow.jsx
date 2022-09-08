import React from "react";
import DeleteModal from "../Modal/DeleteModal";
import EditModal from "../Modal/EditModal";

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
        <span className="badge badge-ghost badge-lg text-sm">{props.category}</span>
      </td>
      <td>
        <label htmlFor={`edit-modal-${props.id}`} className="btn btn-ghost btn-xs modal-button" id={props.id} onClick={(e)=>console.log(e.target.id)}>ویرایش</label>
        <label htmlFor={`delete-modal-${props.id}`} className="btn btn-ghost btn-xs modal-button">حذف</label>
      </td>
      <EditModal pte={props} />
      <DeleteModal ptd={props}/>
    </tr>
  );
}

export default ProductRow;
