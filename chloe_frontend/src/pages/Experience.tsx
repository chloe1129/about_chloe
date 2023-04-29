import React from "react";
import ExperienceBox from "../components/ExperienceBox";
import ExperienceNav from "../components/ExperienceNav";

function Experience() {
  return (
    <div
      className="flex justify-center pb-20 h-screen"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <div className="flex flex-col mx-10 my-10 align-middle items-center">
        <div className="text-3xl font-semibold text-violet-800">Experience</div>
        <div className="my-8 rounded-xl bg-white py-4 px-8">
          <ExperienceNav />
          <ExperienceBox />
        </div>
      </div>
    </div>
  );
}

export default Experience;
