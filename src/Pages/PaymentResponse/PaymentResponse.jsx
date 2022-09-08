import React from 'react'
import { Link } from 'react-router-dom'

function PaymentResponse() {
  return (
    <div>
      <p>
        از خریدتان سپاس‌گزاریم.
      </p>
      <Link to={'/'}>بازگشت به سایت</Link>
      </div>
  )
}

export default PaymentResponse