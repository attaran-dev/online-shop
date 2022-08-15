import React from 'react'

function StockPriceRow(props) {
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
        <div>{props.price} تومان</div>
      </td>
      <td>
        <div>
            {props.stock}
        </div>
      </td>
    </tr>
  )
}

export default StockPriceRow