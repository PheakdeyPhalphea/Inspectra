import { LuPlus } from "react-icons/lu";
import React from "react";
import SearchAndFilterComponent from "@/components/Project/SearchAndFilterComponent/SearchAndFilterComponent";
import { Metadata } from "next";
import QualityCardComponent from "@/components/Project/CardResultComponent/QualityGateCardComponent";
import ResultCardComponent from "@/components/Project/CardResultComponent/ResultCardComponent";
import ProjectCardComponent from "@/components/Project/CardProjectComponent/ProjectCardComponent";
import ProjectCardNameComponent from "@/components/Project/CardProjectComponent/ProjectCardNameComponent";

export const metadata: Metadata = {
  title: "Project - Inspectra",
  description:
    "Learn more about Inspectra, a white-box testing platform designed to review source code and identify security weaknesses. Discover our mission, values, and commitment to secure development.",
};
export default function page() {
  return (
    <main className="w-[90%] mx-auto">
      <section className="w-full flex justify-between items-center mt-[60px] mb-5 md:my-[60px]">
        <p className="text-text_title_20 md:text-text_title_24 text-text_color_light dark:text-text_color_dark">
          Scan Project
        </p>
        <div className="flex w-auto gap-3 justify-between">
          <div className="p-2 rounded-2xl w-[50px] items-center text-text_color_light flex justify-center bg-primary_color">
            All
          </div>
          <div className="px-4 py-2 rounded-2xl inline-flex w-auto md:w-[170px]  items-center text-text_color_light md:flex md:justify-around bg-text_color_dark">
            <p className="hidden md:block">Create Project</p>
            <LuPlus />
          </div>
        </div>
      </section>
      <section className="w-full h-full flex justify-between mb-[60px] md:my-[60px]">
        <div className="w-[30%] hidden lg:block">
          <QualityCardComponent />
          <ResultCardComponent />
        </div>
        <div className="w-full h-full lg:w-[65%] p-10 rounded-[20px] bg-text_color_dark dark:bg-card_color_dark">
          <SearchAndFilterComponent/>
          <ProjectCardComponent />
          <ProjectCardNameComponent />
        </div>
      </section>
    </main>
  );
}
