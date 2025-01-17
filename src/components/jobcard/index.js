import { Button } from "antd";
import dayjs from "dayjs";
import React from "react";

const JobCard = (props) => {
//   const skills = ["Javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border-green-300 shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-105">
        <div className="flex flex-col items-start gap-3"> 
          <h1 className="text-lg font-semibold">{props.title} -{props.company}</h1>
          <p>{props.type}  {props.experience}  {props.location}</p>
          <div className="flex items-center gap-2">
            {props.skills.map((skill) => (
              <p key={skill} className="text-green-400 py-1 px-2 rounded-md border border-black">{skill}</p>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays>1?`${diffInDays} days`:`${diffInDays} day`} ago</p>
          <a href={props.job_link}>
          <Button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md">Apply</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
