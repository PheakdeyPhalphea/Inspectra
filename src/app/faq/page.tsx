import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function page() {
  return (
    <section className="w-[90%] mx-auto relative z-10 my-[60px] ">
      {/* title */}
      <div className="text-text_title_20 md:text-text_header_34 mb-[60px] text-center rounded-tl-[20px] rounded-br-[20px] text-text_color_light  p-2 bg-primary_color w-full md:w-[500px] h-full">
        Get your doubts answered
      </div>
      <div>
        <Accordion type="single"  collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className= " text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              Which languages and frameworks does Inspectra support in its
              scans?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra supports a broad range of languages and frameworks,
              including Spring Boot, Django, Laravel, React, Next.js, FastAPI,
              and Nest. Our platform performs thorough code analysis to detect
              security vulnerabilities across these popular frameworks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              Does Inspectra support containerized and cloud-native
              environments?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra leverages SonarQube (web and CLI) for source code
              analysis and OWASP Checker for security-specific checks. Built on
              Spring Boot and Next.js with TypeScript, it is optimized for
              performance, scalability, and ease of use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              Does Inspectra support containerized and cloud-native
              environments?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra is built with Docker for containerization and is
              deployable in Kubernetes (K8s) environments if required. This
              setup provides flexibility for scalable cloud-native deployment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              What types of databases does Inspectra support?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra is compatible with PostgreSQL and MongoDB databases,
              allowing seamless integration with projects that use these systems
              and secure storage of scan results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              How does Inspectra perform white-box testing?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra provides a white-box testing platform to review source
              code and identify security weaknesses. Using SonarQube and OWASP
              Checker, Inspectra analyzes code structure and vulnerabilities
              directly within your Git projects.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-text_color_light dark:text-text_color_dark  text-left md:text-text_title_20">
              How does Inspectra handle automation and script-based workflows?
            </AccordionTrigger>
            <AccordionContent className="text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Inspectra utilizes ShellScript and PowerShell for automating scans
              and tasks, providing compatibility across both Linux and Windows
              environments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
