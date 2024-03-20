import React, { useEffect } from "react";
// import OverviewCounter from "../counter/OverviewCounter";
// import Services from "../pages/Services";
// import Main from "../main/Main";
import Carousel from "./Carousel";
import Hero from "./Carousel";
import OverviewCounter from "../counter/OverviewCounter";
import Services from "../pages/Services";
import Blog from "../pages/Blogs";
import Banner from "../pages/Brand";

import Testominals from "../testominals/Testominals";
import ContactUs from "../contact/ContactUs";
import Aos from "aos";
import Team from "../team/Team";
import RecentWork from "../protofilo/Protofilo";
import AboutUs from "../about/About";
import "aos/dist/aos.css"


const Dashboard = () => {
  useEffect(()=>{
    Aos.init(
      {
        offset:100,
        duration:500,
        easing:"ease-in-sine",
        delay:100,
      }
    )
    Aos.refresh();
  },[])
  return (
    <div>
      
        <Carousel/>
        <OverviewCounter/>
        <Services/>
        <Banner/>
        <Blog/>
        <RecentWork/>
        <Testominals/>
        
       
        <Team/>
        <ContactUs/>
        
      
    </div>
  );
};

export default Dashboard;
