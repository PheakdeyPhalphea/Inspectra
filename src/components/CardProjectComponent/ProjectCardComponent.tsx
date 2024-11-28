import React from "react";
import { projectData } from "@/data/Project";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export default function ProjectCardComponent() {
  return (
    <section className="w-full h-full  p-5 border  border-text_color_desc_light rounded-[20px] ">
      <div className="flex justify-between w-full">
        <p className="text-text_body_16 text-text_color_light dark:text-text_color_dark ">
          {projectData.projectName}
        </p>
        {projectData.projectResult === "Passed" ? (
          <div className="flex text-center items-center">
            <div className="w-[25px] h-[25px] flex items-center justify-center rounded-[5px] bg-primary_color">
              <FaCheck />
            </div>
            <p className=" px-2 text-text_body_16">
              {projectData.projectResult}
            </p>
          </div>
        ) : (
          <div className="flex text-center items-center">
            <div className="w-[25px] h-[25px] flex items-center justify-center rounded-[5px] bg-custom_red">
              <RxCross2 />
            </div>
            <p className=" px-2 text-text_body_16">
              {projectData.projectResult}
            </p>
          </div>
        )}
      </div>
      <p className=" my-2 text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark ">
        {" "}
        <span className="text-secondary_color text-text_body_16">
          Last analysis:
        </span>{" "}
        {projectData.analysisResult}
      </p>
      <hr className="my-5" />
      <div className="h-[100px] flex justify-between">
        {/* security */}
        <div className="w-full h-full">
          {/* score security */}
          <div className="flex w-full justify-center  text-center items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
              A
            </div>
            <p className="mx-2">0</p>
          </div>
          <div className="my-5 w-full flex items-center justify-center">Security</div>
        </div>
        
         {/* reliability */}
         <div className="w-full h-full">
          {/* score security */}
          <div className="flex w-full justify-center  text-center items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
              A
            </div>
            <p className="mx-2">0</p>
          </div>
          <div className="my-5 w-full flex items-center justify-center">Reliability</div>
        </div>

         {/* Maintainability */}
         <div className="w-full h-full">
          {/* Maintainability */}
          <div className="flex w-full justify-center  text-center items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
              A
            </div>
            <p className="mx-2">0</p>
          </div>
          <div className="my-5 w-full flex items-center justify-center">Maintainability</div>
        </div>

         {/* Hotspot Reviewed */}
         <div className="w-full h-full">
          {/* Hotspot Reviewed */}
          <div className="flex w-full justify-center  text-center items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
              A
            </div>
            <p className="mx-2">0</p>
          </div>
          <div className="my-5 w-full flex items-center justify-center">Hotspot Reviewed</div>
        </div>

          {/* duplicated */}
          <div className="w-full h-full">
          {/* duplicated */}
          <div className="flex w-full justify-center  text-center items-center">
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
              A
            </div>
            <p className="mx-2">0</p>
          </div>
          <div className="my-5 w-full flex items-center justify-center">Duplicated</div>
        </div>
      </div>
    </section>
  );
}
