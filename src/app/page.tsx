import BenefitComponentCard from "@/components/BenefitComponentCard/BenefitComponentCard";
import FeedbackCard from "@/components/FeedbackCardComponent/FeedbackCard";
import LogoSliderComponent from "@/components/LogoSliderComponent/LogoSliderComponent";
import WorkingProcessCard from "@/components/WorkingProcessCard/WorkingProcessCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <main className="w-[90%] mx-auto relative z-10">
      {/* Hero Section */}
      <section className="xl:flex my-[60px] justify-center items-center">
        {/* Content Section */}
        <section className="text-center  xl:text-left space-y-5">
          <p className="text-[30px] md:text-[40px] xl:text-[60px] px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-semibold">
            Inspectra
          </p>
          <p className="lg:w-full  xl:w-[80%] text-text_body_16 md:text-text_title_24 text-text_color_light font-medium dark:text-text_color_dark">
            Through deep, intelligent scanning and proactive insights empowers
            you to uncover hidden risks with precision
            <span className="block lg:my-5 xl:mt-10">
              Keeping your systems resilient and your data safe
            </span>
          </p>
          {/* Centering Button */}
          <section className="flex justify-center lg:justify-center xl:justify-start">
            <button className="flex justify-between items-center hover:bg-primary_color dark:hover:bg-primary_color hover:text-text_color_light px-5 text-text_color_dark bg-background_dark_mode dark:bg-background_light_mode dark:text-text_color_light rounded-tl-[20px] rounded-br-[20px] w-[160px] h-[50px] text-text_body_16">
              Try Now
              <FaArrowRight />
            </button>
          </section>
        </section>

        {/* Image Section */}
        <section className="hidden justify-end items-end xl:block w-[40%]">
          <img
            src="/images/hero section.png"
            alt="hero section image"
            className="object-cover w-[400px]"
          />
        </section>
      </section>

      {/* Our Working Process */}
      <section className="w-full relative h-[1750px]  md:h-[1200px]  lg:h-[1150px] xl:h-[900px]">
        <section className="w-full rounded-tl-[50px] text-center rounded-br-[50px]   md:h-[900px] lg:h-[900px] xl:h-[650px] bg-text_color_light">
          <p className=" text-text_title_24 md:text-text_header_34 py-10 text-primary_color">
            Our Working Process
          </p>
          <section className="w-full h-full  flex flex-col-reverse xl:flex-row">
            {/* First Content */}
            <section className="w-full md:w-[60%]  md:absolute md:bottom-[130px] md:right-[200px] lg:absolute lg:bottom-20 lg:right-[232px] xl:relative xl:bottom-auto xl:right-auto">
              <WorkingProcessCard />
            </section>

            {/* Second Content */}
            <section className=" w-full  md:w-[40%] md:absolute md:-bottom-[120px] md:right-[320px]  lg:absolute lg:top-[130px] lg:right-[340px] xl:relative xl:top-[100px] xl:right-auto h-full flex flex-col  md:justify-start md:items-start">
              <p className=" md:w-[500px] text-center xl:text-start text-text_body_16 text-secondary_color ">
                Steps into getting your work started
              </p>
              <p className=" w-full text-center text-text_title_24 md:w-[500px] xl:w-[300px] md:text-left text-text_color_dark md:text-text_header_34">
                Inspect, Improve, Innovative
              </p>
              <section className="my-10 flex justify-center lg:justify-center xl:justify-start">
                <button className="flex justify-between items-center bg-primary_color px-5 text-text_color_light rounded-tl-[20px] rounded-br-[20px] w-[180px] h-[50px] text-text_body_16">
                  Try Now
                  <FaArrowRight />
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>

      {/* Second Section */}
      <section className="text-center lg:my-[60px] space-y-5">
        <section className="flex w-full justify-center">
          <section className="space-y-2 text-right text-text_title_24 md:text-text_header_34 pr-4 font-medium text-text_color_light dark:text-text_color_dark">
            <p>See the</p>
            <p>Secure the</p>
          </section>
          <section className="space-y-2 text-left text-text_title_24 md:text-text_header_34">
            <p className="rounded-tl-[20px] rounded-br-[20px] bg-primary_color font-medium text-text_color_light px-2 inline-block">
              Unseen
            </p>
            <p className="rounded-tl-[20px] rounded-br-[20px] bg-primary_color font-medium text-text_color_light px-2">
              Unknown
            </p>
          </section>
        </section>
        <p className="text-text_body_16 md:text-text_title_24 text-text_color_desc_light dark:text-text_color_desc_dark mx-auto lg:w-[80%] xl:w-[65%]">
          Through deep, intelligent scanning and proactive insights, we help you
          secure your code and protect against unseen vulnerabilities
        </p>
        <LogoSliderComponent />
      </section>

      {/* benefit section */}
      <section className="w-full text-center lg:my-[60px]">
        <p className=" text-text_header_34 px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-semibold">
          Benefit
        </p>
        <BenefitComponentCard />
      </section>

      {/* feedback section */}
      <section className="w-full text-center lg:my-[60px]">
        <p className="  text-text_header_34 px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-semibold">
          User Feedback
        </p>
        <FeedbackCard />
      </section>

      {/* FAQs section */}
      <section className="w-full text-center lg:my-[60px]">
        <Link href="/faq">
          {" "}
          <p className="text-text_header_34 px-2 inline rounded-tl-[20px] text-text_color_light rounded-br-[20px] bg-primary_color font-semibold">
            FAQs
          </p>{" "}
        </Link>
        <section>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left text-text_title_20">
                Does Inspectra support containerized and cloud-native
                environments?
              </AccordionTrigger>
              <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
                Inspectra is built with Docker for containerization and is
                deployable in Kubernetes (K8s) environments if required. This
                setup provides flexibility for scalable cloud-native deployment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left text-text_title_20">
                How does Inspectra perform white-box testing?
              </AccordionTrigger>
              <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
                Inspectra provides a white- box testing platform to review
                source code and identify security weaknesses. Using SonarQube
                and WASP Checker, Inspectra analyzes code structure and
                vulnerabilities directly within your Git projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left text-text_title_20">
                How does Inspectra handle automation and script-based workflows?
              </AccordionTrigger>
              <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
                Inspectra utilizes ShellScript and PowerShell for automating
                scans and tasks, providing compatibility across both Linux and
                Windows environments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </section>
    </main>
  );
}
//
