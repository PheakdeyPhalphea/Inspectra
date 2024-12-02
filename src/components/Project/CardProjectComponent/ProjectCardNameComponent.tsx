import React from "react";
import { projectData } from "@/data/Project";
export default function ProjectCardNameComponent() {
  return (
    <section className="w-full h-full md:h-[150px] my-5  p-5 border border-opacity-40 border-text_color_desc_light dark:border-primary_color rounded-[20px] ">
      <div className="flex justify-between w-full">
        <p className="text-text_body_16 text-secondary_color dark:text-text_color_dark ">
          {projectData.projectName}
        </p>
      </div>
      <hr className="my-5 dark:border-primary_color" />
      <p className=" my-2 text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark ">
        {" "}
        Project&apos;s{" "}
        <span className="text-secondary_color truncate">
          {projectData.projectName}
        </span>{" "}
        is not analyzed yet.
        {" "}
        <span className="text-link_color underline">
        Configure analysis
        </span>
      </p>
    </section>
  );
}
