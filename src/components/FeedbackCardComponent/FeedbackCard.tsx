"use client"
import React from "react";

import { feedbackType } from "@/types/Feedback";
import { useGetAllUserFeedbackQuery } from "@/redux/service/feedback";
import { convertToDayMonthYear } from "@/lib/utils";
export default function FeedbackCard() {
  const { data } = useGetAllUserFeedbackQuery({});
  const result = data?.content.slice(0, 3);
 
  return (
    <div className="grid gap-[10px] gap-y-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center xl:justify-items-between my-10">
      {result?.map((feedback: feedbackType, index: number) => (
        <div
          key={index}
          className=" w-[350px] md:w-[330px] lg:w-[350px] h-[250px]  rounded-[20px] items-center p-5 text-text_color_light dark:text-text_color_dark bg-card_color_light dark:bg-card_color_dark"
        >
          {/* Feed content */}
          <p className="text-text_color_ligh text-start text-text_body_16 dark:text-text_color_dark line-clamp-5">
            {feedback?.message}
          </p>
          <hr className="block my-5" />
          <div className="w-full flex justify-between items-center">
            <div className="text-text_color_desc_light dark:text-text_color_desc_dark text-text_body_16">
              {feedback?.firstName} {feedback?.lastName}
              <p>{convertToDayMonthYear(feedback?.createdAt)}</p>
            </div>
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
              <img
                src={`http://136.228.158.126:4011/images/${feedback?.profile}`}
                alt="Logo"
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
