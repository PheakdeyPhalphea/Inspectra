import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from 'next/image';
import React from "react";
const useCases = [
  {
    title: "Developers",
    description: "Use Inspectra to get insights into their code, identifying issues like bugs, code smells, and security vulnerabilities to help them write cleaner, more maintainable code."
  },
  {
    title: "Development Teams",
    description: "Rely on it to enforce consistent coding standards, reduce bugs, and manage technical debt across projects."
  },
  {
    title: "Quality Assurance (QA) Teams",
    description: "Use it to assess code quality from a non-functional perspective, providing feedback on maintainability and performance issues."
  },
  {
    title: "Project Managers",
    description: "Monitor the technical health of the codebase through Inspectra, ensuring quality standards are met and reducing future maintenance costs."
  },
  {
    title: "Security Teams",
    description: "Leverage Inspectra to detect vulnerabilities, support compliance, and protect applications from potential exploits."
  }
]

export default function page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="inline-block rounded-sm bg-[#B9FF66] px-6 py-2 text-3xl font-bold rounded-tl-[20px] rounded-br-[20px] mt-6">
          Who&apos;s it for ?
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-500">
          Inspectra is widely used by various roles in software development to
          maintain and improve code quality. Developers rely on it to get
          insights into their code, identifying potential issues like bugs, code
          smells, and security vulnerabilities, which helps them write cleaner
          and more maintainable code. Development teams use Inspectra to enforce
          consistent coding standards across projects, reduce bugs, and track
          areas of technical debt.
        </p>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-tl-[20px] rounded-br-[20px] px-4 py-2 mt-6">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </section>

      {/* Use Case Section */}
      <section  className="container mx-auto p-4">
        <h2 className="text-3xl font-bold">Use Cases</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-2">
                <div className="flex gap-2">
                  <Check className="mt-1 shrink-0 text-green-500" />
                  <div>
                    <p className="text-lg">{useCase.title} : {useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/useCase.png"
                alt="Developer with sword and shield illustration"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
    </section>
    </main>
  );
}
