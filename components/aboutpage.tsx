import React from "react";

const Aboutpage = () => {
  return (
    <div className="h-[100vh]  bg-black">
      <div className="flex items-center h-full    px-[0.8vw]">
        <div>
          <div className="flex w-full ">
            <div className="bg-gray-700 w-[28vw] h-[56vh]"></div>

            <div className="  w-full ml-[1.2vw] text-[1vw]  flex flex-col">
              <div className="flex w-full  justify-between">
                <div>
                  <div>Daniel Altman</div>
                  <div>OpenAI CEO</div>
                </div>
                <div className="border-t border-white">(Working sinc 2009)</div>
              </div>

              <div className="h-full"></div>

              <span className="text-[3.5vw]  leading-[100%]  w-full">
                In my 15 years as a designer, OMMO is the
              </span>
            </div>
          </div>

          <div className="text-[3.5vw] leading-[100%]">
            development partner who genuinely makes my job easier. Their ability
            to consistently deliver allows me to focus on design, knowing the
            development is in reliable hands.
          </div>
        </div>
      </div>
      <div>(FOREVERROLLING)</div>
    </div>
  );
};

export default Aboutpage;