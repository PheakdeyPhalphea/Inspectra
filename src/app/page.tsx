import LogoSliderComponent from "@/components/LogoSliderComponent/LogoSliderComponent";
import { Button } from "@/components/ui/button";

import { FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <section className="w-[90%] mx-auto relative z-10  ">
      {/* Here Section */}
      <div className="xl:flex h-screen justify-center items-center ">
        {/* content section */}
        <div className="text-center xl:text-left space-y-10">
          <p className="text-[30px] md:text-[40px] xl:text-[60px] px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-semibold">
            Inspectra
          </p>
          <p className="lg:w-full xl:w-[80%] text-text_title_24 text-text_color_light font-medium dark:text-text_color_dark">
            Through deep, intelligent scanning and proactive insights empowers
            you to uncover hidden risks with precision
            <span className="block mt-10">
              Keeping your systems resilient and your data safe
            </span>
          </p>
          {/* Centering button */}
          <div className="flex justify-center lg:justify-center xl:justify-start">
            <button className="flex justify-between items-center hover:bg-primary_color dark:hover:bg-primary_color hover:text-text_color_light px-5 text-text_color_dark bg-background_dark_mode dark:bg-background_light_mode dark:text-text_color_light rounded-tl-[20px] rounded-br-[20px] w-[160px] h-[50px] text-text_body_16">
              Try Now
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* image section */}
        <div className=" hidden  xl:block w-[40%]  ">
          <img
            src="/images/hero section.png"
            alt="hero section image"
            className="object-cover "
          />
        </div>
      </div>
      {/*  second section see the unseen secure the unknown */}
      <div className="text-center space-y-5">
        <section className="flex w-full justify-center">
          <div className="space-y-2 text-right text-text_title_24  md:text-text_header_34 pr-4 font-medium text-text_color_light dark:text-text_color_dark">
            <p>See the</p>
            <p>Secure the</p>
          </div>
          <div className="space-y-2 text-left text-text_title_24 md:text-text_header_34">
            <p className="rounded-tl-[20px] rounded-br-[20px] bg-primary_color  font-medium text-text_color_light px-2  inline-block">
              Unseen
            </p>
            <p className="rounded-tl-[20px] rounded-br-[20px] bg-primary_color  font-medium text-text_color_light px-2">
              Unknown
            </p>
          </div>
        </section>
        <p className=" text-text_body_16 md:text-text_title_24 text-text_color_desc_light dark:text-text_color_desc_dark mx-auto lg:w-[80%] xl:w-[65%]">
          Through deep, intelligent scanning and proactive insights, we help you
          secure your code and protect against unseen vulnerabilities
        </p>
        <LogoSliderComponent />
      </div>
    </section>
  );
}
//
