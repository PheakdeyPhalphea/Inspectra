import React from "react";

export default function WorkingProcessCard() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-evenly ">
      {/* first row */}
      <div className="md:mr-10 xl:mr-0">
        {/* card 1 */}
        <div className=" w-[250px] h-[250px] md:h-[300px] bg-primary_color rounded-[50px] flex flex-col justify-center items-center">
          <div className="w-full  flex flex-col justify-around text-start px-5">
            <p className="text-text_color_light  text-[40px] md:text-[60px] font-bold">
              1{" "}
              <span className="text-[72px] font-bold text-secondary_color">
                .
              </span>
            </p>
            <p className="text-text_title_24 font-semibold text-text_color_light ">
              Upload
            </p>
            <p className="md:text-text_title_20 font-normal text-ascend_color ">
              Upload Your Git Project URL
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-[250px] h-[250px] md:h-[300px] mt-10 bg-text_color_dark rounded-[50px] flex flex-col justify-center items-center">
          <div className="w-full  flex flex-col justify-around text-start px-5">
            <p className="text-text_color_light  text-[40px] md:text-[60px] font-bold">
              3{" "}
              <span className="text-[72px] font-bold text-secondary_color">
                .
              </span>
            </p>
            <p className="text-text_title_24 font-semibold text-text_color_light ">
              Report
            </p>
            <p className="md:text-text_title_20 font-normal text-ascend_color ">
              Get Detail Report and Recommendation
            </p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className=" my-[50px] md:mt-[100px]">
        {/* card 1 */}
        <div className="w-[250px] h-[250px] md:h-[300px] bg-text_color_dark rounded-[50px] flex flex-col justify-center items-center">
          <div className="w-full  flex flex-col justify-around text-start px-5">
            <p className="text-text_color_light  text-[40px] md:text-[60px] font-bold">
              2{" "}
              <span className="text-[72px] font-bold text-secondary_color">
                .
              </span>
            </p>
            <p className="text-text_title_24 font-semibold text-text_color_light ">
              Scan
            </p>
            <p className="md:text-text_title_20 font-normal text-ascend_color ">
              Upload Your Git Project URL
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-[250px] h-[250px] md:h-[300px] mt-10 bg-primary_color rounded-[50px] flex flex-col justify-center items-center">
          <div className="w-full  flex flex-col justify-around text-start px-5">
            <p className="text-text_color_light  text-[40px] md:text-[60px] font-bold">
              4{" "}
              <span className="text-[72px] font-bold text-secondary_color">
                .
              </span>
            </p>
            <p className="text-text_title_24 font-semibold text-text_color_light ">
              Export
            </p>
            <p className="md:text-text_title_20 font-normal text-ascend_color ">
              Export as PDF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
