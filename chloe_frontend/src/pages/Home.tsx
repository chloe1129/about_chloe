import React from "react";
import profileImg from "../img/chloe_profile.jpg";
import Github from "../img/svg/Github";
import Linkedin from "../img/svg/Linkedin";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="md:flex grid mx-10 align-middle items-center">
        <div className="flex-col pt-8 space-y-5">
          <div className="text-base text-gray-600">Hi my name is</div>
          <div className="text-5xl font-semibold text-violet-800">
            ChaeHyun Lee
          </div>
          <div className="flex space-x-2 items-center">
            <div className="text-xl font-semibold text-violet-800">Chloe,</div>
            <div>is my other name that you can also call me</div>
          </div>

          <div className="text-2xl font-semibold">I build technologies</div>
          <div>
            I am a passionate SW Engineer with the deep interest in utilizing
            cutting-edge technologies to solve real-world problems.
          </div>
          <div>
            <button className="px-10 py-4">
              <a href="https://github.com/chloe1129">
                <Github className="hover:fill-violet-800" />
              </a>
            </button>
            <button className="py-4">
              <a href="https://www.linkedin.com/in/chaehyun-lee-14a3bb217/">
                <Linkedin className="hover:fill-violet-800" />
              </a>
            </button>
          </div>
        </div>

        <div className="flex m-10 md:shrink-0 justify-center">
          <img className="rounded-xl" alt="" src={profileImg} width={300} />
        </div>
      </div>
    </div>
  );
}

export default Home;
