import React from "react";
import { facetsData } from "@/data/facets";
export default function ResultCardComponent() {
  return (
    <div>
      {facetsData.facets.map((item: any, index) => (
        <div
          key={index}
          className="w-full rounded-tl-[20px] rounded-[20px] h-full mt-10 bg-text_color_dark"
        >
          <div className="text-text_body_16 text-text_color_light rounded-tl-[20px] rounded-br-[20px] bg-primary_color flex justify-center items-center text-center h-[40px] w-[150px]">
            {item.property}
          </div>
          <div className="w-full h-full my-5 px-5">
            {item.values.map((result: any, id: number) => (
              <div
                key={id}
                className="flex text-center items-center justify-between my-5"
              >
                <div className="flex text-center items-center">
                  <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
                   A
                  </div>
                  <p className="px-2 text-text_color_light text-text_body_16">
                    {result.count > 0 ? "Active" : "Inactive"}
                  </p>
                </div>
                <p className="text-text_color_desc_light text-text_body_16">
                  {result.count} {/* Show the count */}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
