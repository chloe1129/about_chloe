import React from "react";
import profileImg from "../img/chloe_profile.jpg";
import Github from "../img/svg/Github";
import Linkedin from "../img/svg/Linkedin";

function Home() {
  return (
    <div
      className="flex justify-center pb-20"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <div className="md:flex grid mx-10 my-10 align-middle items-center">
        <div className="flex-col space-y-5 font-sans">
          <div className="text-lg text-gray-600">Hi my name is</div>
          <div className="text-6xl font-semibold text-violet-800">
            ChaeHyun Lee
          </div>
          <div className="flex space-x-2 items-center">
            <div className="text-2xl font-semibold text-violet-800">Chloe,</div>
            <div>is my other name</div>
          </div>

          <div className="text-3xl font-semibold">
            I design and develop technologies
          </div>
          <div className="text-lg">
            I am a passionate SW Engineer with a focus on developing web
            solutions by utilizing latest technologies.
          </div>
          <div>
            <button className="px-3 py-4">
              <a href="https://github.com/chloe1129">
                <Github className="hover:fill-violet-800" />
              </a>
            </button>
            <button className="px-5 py-4">
              <a href="https://www.linkedin.com/in/chaehyun-lee-14a3bb217/">
                <Linkedin className="hover:fill-violet-800" />
              </a>
            </button>
          </div>
        </div>

        <div className="flex m-10 md:shrink-0 justify-center">
          <img
            className="rounded-2xl border-white border-8"
            alt=""
            src={profileImg}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
