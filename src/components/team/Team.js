import React from 'react'
import { team } from '../../utilis/Items'
import { Card } from 'antd'
import { FacebookFilled, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'

const Team = () => {
  return (
    <div>
    <div className="my-5">
      <h1 className="text-center text-3xl font-bold p-2 text-gray-900">Our Teams</h1>
    </div>

    <div className="flex justify-center" data-aos ="fade-up-right"
    data-aos-duration="1000">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {team?.map((item) => (
          <div className="bg-white p-4 shadow-md rounded-md ">
           
            
            <Card
              style={{
                width: 300,
              }}
              cover={
                <img
                  alt="example"
                  src={item.image}
                  className="transition-transform transform hover:translate-y-2 hover:scale-105"
                />
               
              }
              
            >
                <div className='flex justify-center gap-3'>
               <a href=''><FacebookOutlined /></a>
              <a href='https://twitter.com/'><TwitterOutlined /></a>
              <a href=''><InstagramOutlined /></a>
              
              
             </div>
                
            
           
            
              <div className='text-center'>
                <div className="text-xl font-bold">{item.name}</div>
                <div>{item.position}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Team