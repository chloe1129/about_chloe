import React from "react";
import ProjectBox from "../components/ProjectBox";

function Project() {
  return (
    <div
      className="flex justify-center pb-20 h-screen"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <div className="flex flex-col mx-10 my-10 align-middle items-center">
        <div className="text-3xl font-semibold text-violet-800 mb-6">
          Project
        </div>
        <ProjectBox />
      </div>
    </div>
  );
}

export default Project;
