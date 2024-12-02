import FAQsComponent from "@/components/FAQsComponent/FAQsComponent";
import React from "react";

export default function page() {
  return (
    <section className="w-[90%] mx-auto relative z-10 my-[60px] ">
      {/* title */}
      <div className="text-text_title_20 md:text-text_header_34 mb-[60px] text-center rounded-tl-[20px] rounded-br-[20px] text-text_color_light  p-2 bg-primary_color w-full md:w-[500px] h-full">
        Get your doubts answered
      </div>
      <FAQsComponent />
    </section>
  );
}
