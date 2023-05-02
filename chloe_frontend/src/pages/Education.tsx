import React from "react";
import CAU from "../img/svg/CAU";

function Education() {
  return (
    <div
      className="flex justify-center pb-20 h-screen"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <div className="flex flex-col mx-10 my-10 align-middle items-center">
        <div className="text-3xl font-semibold text-violet-800">Education</div>
        <div className="flex flex-col justify-between mx-3 my-10 py-4 px-8 font-sans  rounded-xl bg-white border-2 border-gray-300 hover:border-violet-800">
          <div className="flex flex-row space-x-3 items-center text-slate-700 p-4">
            <div className="text-2xl font-semibold pr-10">
              Bachelor of Software
            </div>
            <div className="text-sm pl-24">2019-present</div>
          </div>
          <a href="https://www.cau.ac.kr/index.do">
            <div className="px-4 text-lg text-violet-700 font-semibold">
              Chung-Ang University
            </div>
          </a>
          <div className="flex flex-row items-end justify-between">
            <div className="p-4">
              <div className="font-semibold">Course Work</div>
              <div className="p-3">
                <div>- Operating System</div>
                <div>- Algorithm</div>
                <div>- Data Structures </div>
                <div>- DataBase Structures </div>
                <div>- Computer Architecture</div>
              </div>
            </div>
            <CAU className="w-20 m-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
