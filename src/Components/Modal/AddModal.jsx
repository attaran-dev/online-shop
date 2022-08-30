import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editProductAsync, changeApplied} from '../../redux/products'
import {addProduct} from "../../api/index"



function AddModal() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [formData, setFormData] = useState({});
  // const [textarea, setTextarea] = useState(pte.description);
  const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useState({})

const handleFileChange = (e) =>{
  const chosenFiles= Array.prototype.slice.call(e.target.files)
  console.log(chosenFiles);
  handleUploadFiles(chosenFiles);
}

const handleUploadFiles = (files) =>{
  setUploadedFiles(files);
  const uploaded = [...uploadedFiles];
files.some((file) => {
    uploaded.push(file);
})
setUploadedFiles(uploaded);
console.log(uploadedFiles);
}

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:`${e.target.value}`})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
        name: formData.name,
      model: formData.model,
      category: formData.category,
      description: formData.description,
      image: uploadedFiles[0],
      images: uploadedFiles.slice(1, uploadedFiles.length)
      })

    dispatch(changeApplied(false))
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
    console.log(uploadedFiles.slice(1, uploadedFiles.length));
console.log()
  }, [uploadedFiles, isOpen])
  return (
    <div>

{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id={`add-modal`} className="modal-toggle"/>
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor={`add-modal`} className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>{setIsOpen(false)}}>✕</label>

    <div className="m-4 flex flex-col gap-2">
    <h3 className="text-xl font-bold text-center mb-4">افزودن محصول</h3>
    <form className='flex gap-8'>
    <div className="flex flex-col gap-4" >
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

    </div>
    <div className="flex flex-col gap-2">
      <p>تصاویر کالا:</p>
      <label htmlFor="product-image" className="text-sm btn btn-primary">
        انتخاب تصاویر
      </label>
      <div>
    <input type="file" name="image" id="product-image" multiple onChange={handleFileChange} className="w-1/2 hidden"/>
      </div>
      <hr />
{ uploadedFiles.length > 0 &&
  <div className='flex gap-2 flex-col'>
  <p className='text-sm'>پیش‌نمایش تصاویر انتخاب‌شده</p>
  <div>
    <p>تصویر اصلی</p>
    <div>
      {<img src={URL.createObjectURL(uploadedFiles[0])} alt={uploadedFiles[0].name} className="rounded h-1/3 object-cover" /> }
    </div>
  </div>
<div>

    <p>
      سایر تصاویر
    </p>
  <div className='flex gap-2 flex-wrap'>
  
{uploadedFiles.map((file, index )=> (
        <div>
            <img src={URL.createObjectURL(file)} alt={file.name} className={`w-10 h-10 rounded object-cover ${index===0?`hidden`:null}`} />
        </div>
    ))}
</div>
</div>
</div>
}
    </div>
    </form>
    <label htmlFor={`add-modal`} className='btn btn-primary' onClick={handleSubmit}>ثبت</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddModal