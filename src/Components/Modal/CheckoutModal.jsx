import React from "react";
import DatePicker from "react-multi-date-picker"

function CheckoutModal() {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkout-modal`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`checkout-modal`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            ✕
          </label>
          <div className="flex flex-col gap-2">
    <div>
        <label htmlFor="firstname">نام:</label>
        <input type="text" id="firstname" name="firstname" />
    </div>
    <div>
    <label htmlFor="lastname">نام خانوادگی:</label>
        <input type="text" id="lastname" name="lastname" />
    </div>
    <div>
        <label htmlFor="phone">
            تلفن همراه:
        </label>
        <input type="tel" name="phone" id="phone" />
    </div>
    <div>
        <label htmlFor="address">
            آدرس:
        </label>
        <input type="textarea" name="address" id="address"/>
    </div>
    <div>
    <DatePicker />
    </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
