import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'


export default function page() {
  return (
    <main>
       <section className="text-center">
          <h1 className="inline-block rounded-full bg-green-400 px-6 py-2 text-2xl font-bold">
            Who&apos;s it for ?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Inspectra is widely used by various roles in software development to maintain and improve code quality. Developers
            rely on it to get insights into their code, identifying potential issues like bugs, code smells, and security
            vulnerabilities, which helps them write cleaner and more maintainable code. Development teams use Inspectra to
            enforce consistent coding standards across projects, reduce bugs, and track areas of technical debt.
          </p>
          <Button className="mt-8 bg-gray-900" size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
    </main>
  );
}