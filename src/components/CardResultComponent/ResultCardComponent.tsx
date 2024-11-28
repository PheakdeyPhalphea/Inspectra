import React from "react";
import { facetsData } from "@/data/facets";
export default function ResultCardComponent() {
  return (
    <div>
      {facetsData.facets.map((item: any, index: number) => (
        <div
          key={index}
          className="w-full rounded-tl-[20px] rounded-[20px] h-full mt-10 bg-text_color_dark"
        >
          {/* Header with the property name */}
          <div className="text-text_body_16 text-text_color_light rounded-tl-[20px] rounded-br-[20px] bg-primary_color flex justify-center items-center text-center h-[40px] w-[150px]">
            {item.property}
          </div>

          {/* Loop through each result */}
          <div className="w-full h-full my-2 px-5 py-2">
            {item.values.map((value: any, id: number) => {
              // Get the corresponding grade data
              const gradeData = facetsData.values[id] || {}; // Safely access the values array

              return (
                <div
                  key={id}
                  className="flex text-center items-center justify-between my-5"
                >
                  <div className="flex text-center items-center">
                    {/* Grade box with dynamic border */}
                    <div
                      className="w-[30px] h-[30px] flex items-center  justify-center text-text_color_light rounded-[5px]"
                      style={{
                        border: `1px solid ${gradeData.borderColor || "#ccc"}`, // Dynamically set the border color
                      }}
                    >
                      {gradeData.grade || ""} {/* Display grade */}
                    </div>
                    <p className="px-2 text-text_color_light text-text_body_16">
                      {gradeData.result || "No Result"} {/* Display result */}
                    </p>
                  </div>
                  {/* Display the count */}
                  <p className="text-text_color_desc_light text-text_body_16">
                    {value.count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
