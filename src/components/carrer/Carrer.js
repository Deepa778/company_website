import React from "react";
import Header from "../../components/header";
import SearchBar from "../searchbar";
import JobCard from "../jobcard";
import { JobData } from "../../utilis/Items";

const Carrer = () => {
  return (
    
    <div className="bg-gray-400 bg-cover">
      <Header />
      <SearchBar />
      {JobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default Carrer;
