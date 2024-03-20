import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'
import '../testominals/Testominal.css'
import user1 from '../../images/client1.jpg'
import user2 from '../../images/client3.jpg'

const Testominals = () => {
    const slider = useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }
    const slideBackward=()=>{
        if(tx<0){
            tx += 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
        
    }
  return (
    <div>
        <div className="my-5" id="service">
        <h1 className="text-center text-xl font-bold p-2 text-blue-500">Testimonial</h1>
        <h1 className="text-center text-2xl font-bold  p-2 text-red-400">What Our Client says</h1>
      </div>
        <div className='testimonials  ' >
            <div className='back-btn' onClick={slideBackward}><ArrowLeftOutlined /> </div>
            <div className='next-btn' onClick={slideForward}><ArrowRightOutlined /></div>
            <div className='slider'  data-aos ="fade-left"
    data-aos-duration="1000">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user1} alt=''className=''/>
                                <div>
                                    <h3>Smarika Bhandari</h3>
                                    <span>Lalitpur,Nepal</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user2} alt=''className='w-60'/>
                                <div>
                                    <h3>Mr.Rajan Thapa</h3>
                                    <span>Dharan,Nepal</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>


                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user1} alt=''className='w-60'/>
                                <div>
                                    <h3>Smarika Bhandari</h3>
                                    <span>Lalitpur,Nepal</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>


                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user2} alt=''className='w-60'/>
                                <div>
                                    <h3>willam jason</h3>
                                    <span>USA</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user1} alt=''className='w-60'/>
                                <div>
                                    <h3>Smarika Bhandari</h3>
                                    <span>Nepal</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>

                    <li>
                        <div className='slide'>
                            <div className='user_info'>
                                <img src={user1} alt=''className='w-60'/>
                                <div>
                                    <h3>Smarika Bhandari</h3>
                                    <span>Kathmandu</span>
                                </div>

                            </div>
                            <p>"Exceptional app! Seamless user experience, intuitive design, and powerful features. The application has truly transformed how we operate, boosting efficiency and user engagement. Kudos to the team for their expertise and responsive support. Highly recommended!"</p>

                        </div>
                    </li>

                </ul>

              


               


                

            </div>


            


               

        </div>

    </div>
  )
}

export default Testominals