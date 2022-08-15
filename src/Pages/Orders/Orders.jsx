import React from 'react'
import OrderTable from '../../Components/OrderTable/OrderTable'

function Orders() {
  return (
    <div className="flex flex-col gap-4 w-5/6 m-auto">
      <div className="flex flex-row justify-between items-center">
        <div>سفارش‌ها</div>
        <div>
        </div>
      </div>
      <div>
      <OrderTable />
      </div>
    </div>
  )
}

export default Orders