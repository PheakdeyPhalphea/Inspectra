import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <main>
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
    </main>
  );
}
