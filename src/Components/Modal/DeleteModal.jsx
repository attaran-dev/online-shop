import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAsync, getProductsAsyncByPage, deleteProductAsync } from "../../redux/products";

function DeleteModal({ ptd }) {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsOpen(true);
  }, [isOpen, ptd]);

  return (
    <div>
      <input
        type="checkbox"
        id={`delete-modal-${ptd.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`delete-modal-${ptd.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => {
              //   setIsOpen(false);
            }}
          >
            ✕
          </label>
          <div className="flex m-4 flex-col gap-2 text-center">
            <div>مطمئنید می‌خواهید حذف کنید؟</div>
            <div className="m-4 flex gap-2 justify-center">
              <button className="btn btn-primary" onClick={()=>dispatch(deleteProductAsync(ptd.id))}>حذف</button>
              <label
                className="btn btn-primary"
                // onClick={() => setIsOpen(false)}
                htmlFor={`delete-modal-${ptd.id}`}
              >
                لغو
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
