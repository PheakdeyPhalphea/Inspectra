"use client";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { navbarData } from "@/data/navbar";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Only run the theme logic after component mounts
  useEffect(() => {
    setMounted(true); // Set mounted to true after the component has mounted
  }, []);

  // Don't render anything until the component has mounted
  if (!mounted) return null;
  const isRender = pathname === "/login" || pathname === "/register";

  return (
    <nav className="w-full mx-auto z-40 backdrop-blur-2xl sticky top-0">
      <div className="w-[90%] mx-auto ">
        {!isRender && (
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
                {navbarData.map((item, index: number) => (
                  <Link key={index} href={item.link}>
                    {pathname === item.link ? (
                      <p className="text-secondary_color">{item?.name}</p>
                    ) : (
                      <p>{item.name}</p>
                    )}
                  </Link>
                ))}
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
                  href="/login"
                  className="text-text_color_dark bg-background_dark_mode dark:bg-background_light_mode dark:text-text_color_light rounded-tl-[20px] rounded-br-[20px] text-text_body_16  px-4 lg:px-5 py-2 lg:py-2.5 hidden lg:block"
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
                        {navbarData.map((item, index: number) => (
                          <Link key={index} href={item.link}>
                            {pathname === item.link ? (
                              <p className="text-secondary_color">
                                {item?.name}
                              </p>
                            ) : (
                              <p>{item.name}</p>
                            )}
                          </Link>
                        ))}
                      </ul>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </nav>
  );
}
