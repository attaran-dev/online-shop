import React, { useRef } from "react";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import {addOrder, postProductToCart} from "../../api/index"
import { useNavigate } from "react-router-dom";

function CheckoutModal({cart}) {
  const navigate = useNavigate();
  const form = useRef(null)
  const getValuesForm = (formElm) => {
    const temp = {};
    [...formElm].forEach((input) => temp[input.name] = input.value);
    delete temp[""];
    temp.cart = cart;
    temp.isDelivered = false;
    return temp
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = getValuesForm(e.target)
    const res = await addOrder(order)
    if (res) {
      console.log(res);
      // form.current.reset()
      postProductToCart(10, {cart:[]})
        navigate('/payment-result');
    }
  }




  return (
    <div>
      <input
        type="checkbox"
        id={`checkout-modal`}
        className="modal-toggle"
      />
      <div className="modal"
      >
        <div className="modal-box relative backdrop-blur-lg bg-white/40 p-8">
          <label
            htmlFor={`checkout-modal`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            ✕
          </label>
          <form className="flex flex-col gap-6 m-4" ref={form} onSubmit={handleSubmit}>
    <div className="flex flex-col gap-2">
        <label htmlFor="firstname" className="font-bold">نام:</label>
        <input type="text" id="firstname" name="firstname" className="backdrop-blur-md opacity-25 rounded hover:opacity-50 focus:opacity-50 transition duration-300 p-2" />
    </div>
    <div className="flex flex-col gap-2">
    <label htmlFor="lastname" className="font-bold">نام خانوادگی:</label>
        <input type="text" id="lastname" name="lastname" className="backdrop-blur-md opacity-25 rounded hover:opacity-50 focus:opacity-50 transition duration-300 p-2" />
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="font-bold">
            تلفن همراه:
        </label>
        <input type="tel" name="phone" id="phone" className="backdrop-blur-md opacity-25 rounded hover:opacity-50 focus:opacity-50 transition duration-300 p-2" />
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="address" className="font-bold">
            آدرس:
        </label>
        <input type="textarea" name="address" id="address" className="backdrop-blur-md opacity-25 rounded hover:opacity-50 focus:opacity-50 transition duration-300 p-2" />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="pickedDate" className="font-bold">تاریخ تحویل:</label>
    <DatePicker  id="pickedDate" name="pickedDate" inputClass="backdrop-blur-md opacity-25 rounded hover:opacity-50 focus:opacity-50 transition duration-300 p-2 w-full text-blue"
  calendar={persian}
  locale={persian_fa} />
    </div>
    <button type="submit" className="btn btn-primary mt-8">ثبت سفارش و پرداخت</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
