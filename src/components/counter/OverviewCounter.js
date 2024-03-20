import React from "react";
import CountUp from "react-countup";

const OverviewCounter = () => {
  return (
    <section className="container h-12 md:h-32">
      <div className="grid grid-cols-4 divide-x divide-slate-600 mx-auto w-full md:max-w-[800px]  -translate-x-10 md:translate-x-16  bg-gray-800 text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-sm font-bold text-blue-600 sm:text-lg md:text-3xl">
            <CountUp end={200} suffix="+" duration={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Clients</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-bold  text-blue-600 sm:text-lg md:text-3xl">
            <CountUp end={250} suffix="+" duration={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Projects</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-bold  text-blue-600 sm:text-lg md:text-3xl">
            <CountUp end={300} suffix="+" duration={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Subscribers</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm font-bold  text-blue-600 sm:text-lg md:text-3xl">
            <CountUp end={50} suffix="+" duration={2.75}/>
          </h1>
          <h1 className="sm:text-md text-xs md:text-lg">Teams</h1>
        </div>
      </div>
    </section>
  );
};

export default OverviewCounter;
