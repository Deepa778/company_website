import { Card } from "antd";
import React from "react";
import { blog } from "../../utilis/Items";
import {
  CalendarOutlined,
  CommentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../../style/main.css";
import { Navigate, useNavigate } from "react-router-dom";

const Blog = () => {


  
  return (
    <div>
      <div className="my-5"data-aos="fade-down">
        <h1 className="text-center text-3xl font-bold p-2 text-teal-950 mt-8">Our Latest Blogs</h1>
      </div>

      <div className="flex justify-center "  data-aos ="fade-up"
    data-aos-duration="1000">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blog?.map((item) => (
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
                <div className="flex gap-4">
                  <span className="text-blue-500 ">
                    <UserOutlined />
                    {item.type}
                  </span>

                  <span className="text-blue-500 ">
                    <CalendarOutlined />

                    {item.date}
                  </span>

                  <span className="text-blue-500 ">
                    <CommentOutlined />
                    {item.com}
                  </span>
                </div>
                <div>
                  <div className="text-xl font-bold">{item.title}</div>
                  <div>{item.desc}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
