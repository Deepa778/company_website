import { PlayCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "../about/About.css";
import { faq } from "../../utilis/Items";

const AboutUs = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center text-3xl font-bold p-2 text-blue-500">
          Why Us
        </h1>
        <h1 className="text-center text-2xl font-bold  p-2 text-red-400">
          Know More About Company
        </h1>
      </div>
      <div className="about">
        <div className="about-left">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg"
            alt=""
            className="about-img"
          />
          <div className="play-icon">
            <PlayCircleOutlined />
          </div>
        </div>

        <div
          className="about-right"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>TechInnovate Solutions</h2>
          <h1>Empowering Your Digital Journey</h1>
          <p>
            TechInnovate is a forward-thinking IT company dedicated to
            propelling businesses into the digital era. With a focus on
            innovation, we craft tailored solutions that optimize operations and
            elevate user experiences.{" "}
          </p>

          <p>
            From cutting-edge software development to robust IT infrastructure,
            we are your trusted partner in navigating the ever-evolving tech
            landscape. Transform your vision into reality with TechInnovate –
            where technology meets ingenuity
          </p>

          <p>
            A company is a legal entity formed by a group of people to engage in
            business. Learn how to start a company and which is the richest
            company in the world.
          </p>
        </div>
      </div>

      <div className="text-center justify-center">
        <div className="my-5">
          <h1 className="text-center px-2 text-4xl font-bold p-2 text-blue-950">
            Frequesntly Ask Question
          </h1>
        </div>

        <div className="">
          <section className="faq">
            <div className="container">
              {faq.map((val, index) => (
                <div className="box">
                  <button
                    className="accordion"
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <h2>{val.title}</h2>
                    <span>
                      {click === index ? (
                        <i className="fa fa-chevron-down"></i>
                      ) : (
                        <i className="fa fa-chevron-right"></i>
                      )}
                    </span>
                  </button>
                  {click === index ? (
                    <div className="text">
                      <p>{val.desc}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
