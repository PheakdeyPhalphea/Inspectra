"use client";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export default function NavbarComponent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Only run the theme logic after component mounts
  useEffect(() => {
    setMounted(true); // Set mounted to true after the component has mounted
  }, []);

  // Don't render anything until the component has mounted
  if (!mounted) return null;

  return (
    <nav className="w-[90%] mx-auto">
      <section className="flex text-text_color_light dark:text-text_color_dark justify-between items-center p-4">
        {/* logo */}
        <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="object-cover w-full h-full"
          />
        </div>
        {/* content navbar */}
        <div className="hidden lg:block ">
          <ul className="flex w-[500px]  text-text_body_16  justify-between">
            <Link href="/">Home</Link>
            <Link href="/UseCase">Use Case</Link>
            <Link href="/Project">Project</Link>
            <Link href="/Document">Document</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/About Us">About Us</Link>
          </ul>
        </div>
        {/* group icon and sign in */}
        <div className="flex justify-center h-full items-center">
          <div className="flex items-center space-x-4">
            {/* Icon to change theme */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center p-2 rounded-md transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-text_color_dark" />
              ) : (
                <Moon className="h-5 w-5 " />
              )}
            </button>
            {/* Sign in button */}
            <Link
              href=""
              className="text-text_color_dark bg-background_dark_mode dark:bg-background_light_mode dark:text-text_color_light rounded-tl-[20px] rounded-br-[20px] text-text_body_16 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 hidden lg:block"
            >
              Sign in
            </Link>
            {/* menu icon */}
            <div className=" text-[25px] block lg:hidden ">
              <Sheet>
                <SheetTrigger asChild>
                  <IoMenu />
                </SheetTrigger>
                <SheetContent className="bg-background_light_mode dark:bg-background_dark_mode border-hidden">
                  <ul className="  text-text_color_light dark:text-text_color_dark  text-text_body_16  justify-between space-y-4 flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/UseCase">Use Case</Link>
                    <Link href="/Project">Project</Link>
                    <Link href="/Document">Document</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/About Us">About Us</Link>
                    <Link href="/Sign In">Sign in</Link>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
