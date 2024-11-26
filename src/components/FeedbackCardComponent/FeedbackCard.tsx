import React from "react";

export default function FeedbackCard() {
  return (
    <div className="w-[320px] items-center rounded-lg h-[280px] p-5 text-text_color_light dark:text-text_color_dark bg-background_light_mode dark:bg-background_dark_mode">
      {/*  feed content */}
      <p className="text-text_color_light text-text_body_16 dark:text-text_color_dark ">
        Great job on creating an efficient, streamlined code scanner for
        vulnerabilities! Its minimal code approach makes it accessible and easy
        to integrate, helping developers catch issues quickly
      </p>
      <hr className="block my-5" />
      <div className="w-full flex justify-between items-center">
        <div className="text-text_color_desc_light dark:text-text_color_desc_dark text-text_body_16">
          <p>Pheakdey</p>
          <p>12/10/2024</p>
        </div>
        <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
