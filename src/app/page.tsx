import LogoSliderComponent from "@/components/LogoSliderComponent/LogoSliderComponent";
import { Section } from "lucide-react";

export default function Home() {
  return (
    <section className="w-[90%] mx-auto ">
      {/* Here Section */}
      <div className="flex">
        <div className="space-y-5">
          <p className=" lg:text-[50px] xl:text-[65px] px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-medium">
            Inspectra
          </p>
          <p className="w-[80%] text-text_title_24 text-text_color_light font-normal dark:text-text_color_dark">
            Through deep, intelligent scanning and proactive insights empowers
            you to uncover hidden risks with precision
            <span className="block mt-10">
              Keeping your systems resilient and your data safe
            </span>
          </p>
         
        </div>
        <div className="w-[50%]">
          <img
            src="/images/hero section.png"
            alt="hero section image"
            className="object-cover"
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
