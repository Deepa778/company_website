import React from "react";
import { HeaderItem } from "../../utilis/Items";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/Logo.jpg";
import { LogoutOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";

const index = () => {
  const navigate = useNavigate();

  const handelClick = (e) => {
    navigate(e);
  };

  return (
    <div
      className="flex justify-between gap-15 cursor-pointer font-bold "
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Link to="/">
        <div>
          <img
            style={{
              width: "60px",
              height: "65px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
            src={logo}
            alt=""
          />
        </div>
      </Link>

      <div className="flex gap-10">
        {HeaderItem?.map((item) => (
          <div
            key={item.link}
            style={{ color: "white" }}
            onClick={() => {
              handelClick(item.link);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
