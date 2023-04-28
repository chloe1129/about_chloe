import React from "react";
import wholeImg from "../img/chloe_whole_body.png";

function AboutMe() {
  return (
    <div
      className="justify-center pb-20"
      style={{ backgroundColor: "#E6E6FA" }}
    >
      <div className="md:flex grid mx-10 my-10 justify-center">
        <div className="flex m-10 md:shrink-0 md:justify-items-start justify-center">
          <img className="m-5" alt="" src={wholeImg} width={250} />
        </div>
        <div className="justify-center text-lg text-gray-600 my-20 space-y-8">
          <div className="text-3xl font-semibold text-violet-800">About Me</div>
          <div>
            뭐쓰지??????????? 뭐쓰지?????????? 뭐쓰지?????????
            뭐쓰지???????????? 뭐쓰지??????????? 뭐쓰지??????????
            뭐쓰지????????? 뭐쓰지???????????? 뭐쓰지???????????
            뭐쓰지?????????? 뭐쓰지????????? 뭐쓰지????????????
          </div>
          <div>
            뭐쓰지??????????? 뭐쓰지?????????? 뭐쓰지?????????
            뭐쓰지???????????? 뭐쓰지??????????? 뭐쓰지??????????
            뭐쓰지????????? 뭐쓰지???????????? 뭐쓰지???????????
            뭐쓰지?????????? 뭐쓰지????????? 뭐쓰지????????????
          </div>
          <div>
            뭐쓰지??????????? 뭐쓰지?????????? 뭐쓰지?????????
            뭐쓰지???????????? 뭐쓰지??????????? 뭐쓰지??????????
            뭐쓰지????????? 뭐쓰지???????????? 뭐쓰지???????????
            뭐쓰지?????????? 뭐쓰지????????? 뭐쓰지????????????
          </div>
          <div>
            뭐쓰지??????????? 뭐쓰지?????????? 뭐쓰지?????????
            뭐쓰지???????????? 뭐쓰지??????????? 뭐쓰지??????????
            뭐쓰지????????? 뭐쓰지???????????? 뭐쓰지???????????
            뭐쓰지?????????? 뭐쓰지????????? 뭐쓰지????????????
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
