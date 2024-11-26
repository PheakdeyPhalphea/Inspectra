import React from "react";

export default function BannerComponent() {
  return (  
    <div className="w-full h-[30px] bg-background_dark_mode dark:bg-card_color_dark flex justify-center items-center text-primary_color text-[12px]">
      <p>Announcement : We have updated our project! Check it out !</p>
    </div>
  );
}
