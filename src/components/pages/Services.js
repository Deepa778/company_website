import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { ServiceData } from "../../utilis/Items";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div
        className="my-5 mt-0"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <h1 className="text-center text-3xl font-bold p-2 text-blue-500">
          Our Services
        </h1>
        <h1 className="text-center text-2xl font-bold  p-2 text-red-400">
          What we provide to our Clients
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {ServiceData?.map((item) => (
            <div className="bg-white p-4 shadow-md rounded-md ">
              <Card
                style={{
                  width: 300,
                }}
                cover={<img alt="example" src={item.image} />}
              >
                <Meta
                  className="text-center "
                  title={item.title}
                  description={item.description}
                />

                <div className="flex justify-center items-center mt-4">
                  <NavLink to="/services">
                    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                      Readmore
                    </Button>
                  </NavLink>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
