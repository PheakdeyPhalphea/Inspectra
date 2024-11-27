"use client"

import DropdownMenu from "@/components/DropDownDocs/DropDownComponent";
import React, { useState } from "react";
import { HiDocumentSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

export default function Document() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="w-[90%] m-auto flex flex-col lg:flex-row">
      {/* Toggle Button for Small and Medium Screens */}
      <button
        className="lg:hidden fixed top-5 left-5 bg-blue-500 text-white p-3 rounded-full shadow-md z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      <section
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block w-full lg:w-[30%] bg-card_color_light rounded h-screen p-5 my-10 dark:bg-card_color_dark`}
      >
        <div className="w-full max-w mx-auto mb-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2.5 pl-10 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <HiDocumentSearch />
            </span>
          </div>
        </div>
        <DropdownMenu />
      </section>

      {/* Main Content */}
      <section
        className={`${
          isSidebarOpen ? "hidden" : "block"
        } lg:block w-full lg:w-[70%] bg-card_color_light rounded h-screen p-5 my-10 lg:ml-5 dark:bg-card_color_dark`}
      >
        Main Content Goes Here
      </section>
    </main>
  );
}
