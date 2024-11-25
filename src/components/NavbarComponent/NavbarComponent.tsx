"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
export default function NavbarComponent() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className=" text-text_color_light bg-background_light_mode dark:text-text_color_dark dark:bg-background_dark_mode">
      <div className="flex justify-between items-center p-4">
        <div>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div>
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center mx-5 p-2 rounded-md transition-colors "
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-text_color_dark" />
            ) : (
              <Moon className="h-5 w-5 text-text_color_light" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
