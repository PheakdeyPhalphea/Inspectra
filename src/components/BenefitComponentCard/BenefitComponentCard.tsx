"use client";
import React from "react";
import { benefitData } from "@/data/Benefit";
import { benefitType } from "@/types/BenefitType";
import { useTheme } from "next-themes";
export default function BenefitComponentCard() {
  const { theme } = useTheme();
  return (
    <div className="w-full my-5 flex flex-col items-center xl:flex-row xl:justify-between">
      {benefitData.map((item: benefitType, index) => (
        <div
          key={index}
          className="rounded-[20px] bg-card_color_light dark:bg-card_color_dark py-5 my-5  w-full h-full xl:w-[350px] xl:h-[300px] items-center text-center flex flex-col justify-center"
        >
          {theme === "dark" ? (
            <img
              src={item.imageDark}
              alt="hero section image"
              className="w-[150px] h-[150px] object-cover mb-4"
            />
          ) : (
            <img
              src={item.imageLight}
              alt="hero section image"
              className="w-[150px] h-[150px] object-cover mb-4"
            />
          )}
          <p className="text-text_title_24 text-text_color_light dark:text-text_color_dark font-normal">
            {item.title}
          </p>
          <p className="text-text_body_16 mx-5 text-text_color_desc_light dark:text-text_color_desc_dark">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
