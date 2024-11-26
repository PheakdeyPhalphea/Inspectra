import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404 Not Found ',
  description: 'This is a Error Page 404',
  openGraph: {
    images: [
      {
        url: '/images/logo.png',
        alt: 'Inspectra',
      },
    ],
  },
};

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
    <div className="w-full max-w-md">
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Oops! ... 404
      </h1>
      <p className="mb-8 text-base text-muted-foreground sm:text-lg">
        Sorry we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mb-8">
        <Image
          alt="404 illustration"
          className="mx-auto max-w-full"
          width={500}
          height={400}
          src="/images/404.png"
          style={{
            aspectRatio: "1 / 1", 
            objectFit: "cover",
          }}
        />
      </div>
      <Button
        asChild
        className="bg-gray-900 hover:bg-gray-800 text-white rounded-tl-[20px] rounded-br-[20px] px-4 py-2"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
          Go Home
        </Link>
      </Button>
    </div>
  </div>
  
  )
}