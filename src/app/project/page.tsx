import { LuPlus } from "react-icons/lu";
import React from "react";

import QualityCardComponent from "@/components/CardResultComponent/QualityGateCardComponent";
import ResultCardComponent from "@/components/CardResultComponent/ResultCardComponent";
import ProjectCardComponent from "@/components/CardProjectComponent/ProjectCardComponent";
import ProjectCardNameComponent from "@/components/CardProjectComponent/ProjectCardNameComponent";

export default function page() {
  return (
    <main className="w-[90%] mx-auto">
      <section className="w-full flex justify-between my-[60px]">
        <p className="text-text_title_24 text-text_color_light dark:text-text_color_dark">
          Scan Project
        </p>
        <div className="flex w-[230px] justify-between">
          <div className="p-2 rounded-2xl w-[50px] items-center text-text_color_light flex justify-center bg-primary_color">
            All
          </div>
          <div className="p-2 rounded-2xl w-[170px]  items-center text-text_color_light flex justify-around bg-text_color_dark">
            Create Project
            <LuPlus />
          </div>
        </div>
      </section>
      <section className="w-full h-full flex justify-between my-[60px]">
        <div className="w-[30%] hidden lg:block">
          <QualityCardComponent />
          <ResultCardComponent />
        </div>
        <div className="w-[65%] p-10 rounded-[20px] bg-text_color_dark ">
          <ProjectCardComponent />
          <ProjectCardNameComponent />
        </div>
      </section>
    </main>
  );
}
