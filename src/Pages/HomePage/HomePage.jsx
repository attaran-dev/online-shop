import React from 'react'
import FrameDraw from '../../Components/FrameDraw/FrameDraw'
import ProductsCarousel from '../../Components/ProductsCarousel/ProductsCarousel'
import SideMenu from '../../Components/SideMenu/SideMenu'
import Slider from '../../Components/Slider/Slider'

function HomePage() {
  return (

    <div className='flex flex-col gap-20 justify-center items-center'>
      {/* <SideMenu /> */}

        <Slider />

<ProductsCarousel filter="category" value="سازهای بادی" limit={4} key={1} id={1}/>
<img src="assets/svgs/frames/frame-7.svg" alt="frame-7" className='w-1/3' />
<ProductsCarousel filter="category" value="سازهای آرشه‌ای" limit={4} key={2} id={2}/>
<img src="assets/svgs/frames/frame-7.svg" alt="frame-7" className='w-1/3' />
<ProductsCarousel filter="category" value="پیانو" limit={4} key={3} id={3}/>

      {/* <FrameDraw /> */}
    </div>
  )
}

export default HomePage