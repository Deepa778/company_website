import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";
import Carrer from "../components/carrer/Carrer";




const UserLayout = lazy(() => import("../layout/UserLayout"));
const Dashboard = lazy(() => import("../components/user/Dashboard"));
const Home = lazy(() => import("../components/pages/Home"));
const Services = lazy(() => import("../components/pages/Services"));
const Blogs = lazy(() => import("../components/pages/Blogs"));
const Testominals = lazy(() => import("../components/testominals/Testominals"));
const RecentWork = lazy(() => import("../components/protofilo/Protofilo"));
const Team = lazy(() => import("../components/team/Team"));
const Career = lazy(() => import("../components/carrer/Carrer"));
const AboutUs = lazy(() => import("../components/about/About"));
const ContactUs = lazy(() => import("../components/contact/ContactUs"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Dashboard />} />
      

        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="testimonials" element={<Testominals />} />
        <Route path="portfolio" element={<RecentWork />} />
        <Route path="teams" element={<Team />} />
        <Route path="teams" element={<Team />} />
        <Route path="carrer" element={<Carrer />} />

        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
       
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
