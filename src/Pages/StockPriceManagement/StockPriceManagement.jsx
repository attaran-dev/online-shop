import React, {useEffect, useState} from 'react';
import StockPriceTable from '../../Components/StockPriceTable/StockPriceTable'

function StockPriceManagement() {
  return (
    <div className='flex flex-col gap-4'>
      <div></div>
      <div><button className='btn btn-primary'>ذخیره</button></div>
      <StockPriceTable />
    </div>
  )
}

export default StockPriceManagement