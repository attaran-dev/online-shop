import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editProductAsync} from '../../redux/products'


function EditModal({pte}) {
  const [formData, setFormData] = useState({});
  // const [textarea, setTextarea] = useState(pte.description);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:`${e.target.value}`})
    setData({
      "name": formData.name,
      "model": formData.model,
      "category": formData.category,
      "description": formData.description,
    })
  }

  const {isChanged, products} = useSelector((state)=>state.products)
  const dispatch = useDispatch()

  // const [product, setProduct] = React.useState({})
  // React.useEffect(()=>{
  //   setProduct(productToEdit)
  // }, [product])
  useEffect(()=>{
    console.log(products);
    setIsOpen(true)
    setFormData(pte);

  }, [data, isChanged, pte, isOpen])
  return (
    <div>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id={`edit-modal-${pte.id}`} className="modal-toggle"/>
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor={`edit-modal-${pte.id}`} className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>{setIsOpen(false)}}>✕</label>

    <div className="m-4 flex flex-col gap-2">
    <h3 className="text-xl font-bold text-center mb-4">ویرایش محصول</h3>
    <form className="flex flex-col gap-4" onSubmit={(e)=>{
      e.preventDefault();
      // const {name, model, category, description} = e.target;
      dispatch(editProductAsync(+formData.id, data))

      // console.log({
      //   id: formData.id,
      //   name: name.value,
      //   model: model.value,
      //   price: formData.price,
      //   availableQuantity: formData.availableQuantity,
      //   category: category.value,
      //   description: description.innerHTML,
      //   image: formData.image,
      //   images: formData.images
      // });
      setIsOpen(false)
console.log(products);
    }
    } >
      <div className="flex flex-col gap-2">
<label htmlFor='product-name'>نام محصول:</label>
<input type="text" name="name" id="product-name"  value={formData.name} onChange={handleChange} className="p-2 border"/>
      </div>
      <div className="flex flex-col gap-2">
<label htmlFor="product-model">مدل محصول:</label>
<input type="text" name='model' id='product-model'  value={formData.model} onChange={handleChange} className="p-2 border"/>
      </div>
<div className="flex flex-col gap-2">
        <label htmlFor="product-category">دسته‌بندی:</label>
      <select name='category' id="product-category" className="select select-bordered border rounded" onChange={handleChange}
      // value={(formData.category === "سازهای آرشه‌ای" && "bowed-string") || (formData.category === "سازهای بادی" && "wind-instrument") || (formData.category === "گیتار" && "guitar") || (formData.category === "پیانو" && "piano") || (formData.category === "درامز" && "drums")}
        value={formData.category}
      >
        <option value="سازهای آرشه‌ای">
          سازهای آرشه‌ای
        </option>
        <option value="سازهای بادی">سازهای بادی</option>
        <option value="گیتار">گیتار</option>
        <option value="پیانو">پیانو</option>
        <option value="درامز">درامز</option>
      </select>
    </div>
<div className="flex flex-col gap-2">
  <label htmlFor="product-description">توضیحات محصول:</label>
  <textarea name="description" id="product-description" cols="15" rows="5" className='p-2 text-sm border' value={formData.description} onChange={handleChange} />
</div>
<input type="submit" value="ثبت" className='btn btn-primary'/>
    </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default EditModal