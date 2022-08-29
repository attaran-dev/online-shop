import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { saveClick } from "../../redux/products";
import {editProduct} from "../../api/index"



function StockPriceRow(props) {
  const {isSaveClicked} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  const [price, setPrice] = useState(+props.price);
  const [stock, setStock] = useState(+props.stock);
  // const handleChange = (e) =>{
  //   setPrice(e.target.value)
  // }


  useEffect(()=>{
if(isSaveClicked && (price !==props.price || stock !==props.stock)){

  editProduct(props.id, {
    price,
    availableQuantity: stock
  })

}
dispatch(saveClick(false))
  }, [isSaveClicked])

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
        <div>
          <input type="number" className='peer invalid:caret-red-300' value={price} onChange={(e)=>setPrice(e.target.value)} />
        {/* <p className='invisible mt-2 text-red-400 peer-invalid:visible text-sm'>باید عدد وارد کنید</p> */}
        </div>
      </td>
      <td>
        <div>
        <input type="number" className='peer invalid:caret-red-300' value={stock} onChange={(e)=>setStock(e.target.value)} />
        </div>
      </td>
    </tr>
  )
}

export default StockPriceRow