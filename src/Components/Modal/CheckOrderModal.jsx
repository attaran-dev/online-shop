import React from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeOrder } from "../../api/index";
import {changeApplied} from "../../redux/cart"

function CheckOrderModal({ order }) {
    const dispatch = useDispatch(); 
    const orderDate = new DateObject({
        date: order.createdAt,
        format: "YYYY/MM/DD",
        calendar: persian,
        locale: persian_fa
    });
  const navigate = useNavigate();
  const handleClick = async () => {
    const date = new DateObject({ calendar: persian, locale: persian_fa });
    const today = date.format();
    const data = { isDelivered: true, deliveryDate: today };
    const res = await changeOrder(order.id, data);
    if (res) {
        dispatch(changeApplied())
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id={`check-order-modal-${order.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative backdrop-blur-sm bg-white/40 p-8">
          <label
            htmlFor={`check-order-modal-${order.id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            // onClick={() => {
            //   setIsOpen(false);
            // }}
          >
            ✕
          </label>
          <div className="m-4 flex flex-col gap-2">
            <div>
              <div className="text-sm font-bold">نام مشتری:</div>
              <div>{order.firstname} {order.lastname}</div>
            </div>
            <div>
              <div className="text-sm font-bold">آدرس:</div>
              <div>{order.address}</div>
            </div>
            <div>
              <div className="text-sm font-bold">تلفن:</div>
              <div className="text-sm ">{order.phone}</div>
            </div>
            <div>
              <div className="text-sm font-bold">زمان تحویل انتخاب‌شده:</div>
              <div>{order.pickedDate}</div>
            </div>
            <div>
              <div className="text-sm font-bold">زمان سفارش:</div>
              <div>{orderDate.format()}</div>
            </div>
            <div>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th>کالا</th>
                    <th>قیمت</th>
                    <th>تعداد</th>
                  </tr>
                </thead>
                <tbody>
                  {order.cart.map((item) => {
                    return (
                      <tr>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {order.isDelivered && <div><div className="text-sm font-bold">تاریخ تحویل:</div><div>{order.deliveryDate}</div></div>}
            {!order.isDelivered && (
              <div>
                <button className="btn btn-primary mt-8" onClick={handleClick}>
                    <label htmlFor={`check-order-modal-${order.id}`} className="w-full h-full flex self-center items-center cursor-pointer" >تحویل شد</label>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOrderModal;
