import React from 'react'
import "../../style/main.css"
import { ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'



const Carousel = () => {
  return (
    <div className="background-container id=carousel"  data-aos ="fade-up"
    data-aos-duration="1000">
      <div
      
       className='description'>
        <h1>Empowering Innovation Delivering Solutions</h1>
        <p>Join us on a journey of transformation where possibilities are limitless, and your success is our priority</p>
        <Button className='btn'>Explore more<ArrowRightOutlined /></Button>
      </div>
        
      
     
    

    </div>
  )
}

export default Carousel




