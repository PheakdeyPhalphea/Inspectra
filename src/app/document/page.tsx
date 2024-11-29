"use client"

import DropdownMenu from "@/components/DropDownDocs/DropDownComponent";
import React, { useState } from "react";
import { HiDocumentSearch } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";

export default function Document() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<(string | JSX.Element)[]>([<GoHomeFill key="home" />]);
  const [selectedContent, setSelectedContent] = useState("");

  // Function to update breadcrumb
  const handleMenuClick = (question: string, answer?: string) => {
    if (answer) {
      setBreadcrumb([<GoHomeFill key="home" />, question, answer]); // Update breadcrumb with question and answer
      setSelectedContent(`Content for "${answer}" in section "${question}"`);
    } else {
      setBreadcrumb([<GoHomeFill key="home" />, question]); // Update breadcrumb with only the question
      setSelectedContent(`Content for "${question}"`);
    }
  };

    // Handle breadcrumb clicks
    const handleBreadcrumbClick = (index: number) => {
      const newBreadcrumb = breadcrumb.slice(0, index + 1); // Trim breadcrumb to the clicked level
      setBreadcrumb(newBreadcrumb);
  
      // Update content based on breadcrumb level
      if (newBreadcrumb.length === 1) {
        setSelectedContent("Welcome to Home!");
      } else if (newBreadcrumb.length === 2) {
        setSelectedContent(`Content for "${newBreadcrumb[1]}"`);
      } else if (newBreadcrumb.length === 3) {
        setSelectedContent(
          `Content for "${newBreadcrumb[2]}" in section "${newBreadcrumb[1]}"`
        );
      }
    };

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
        <DropdownMenu onMenuClick={handleMenuClick} />
      </section>

      {/* Main Content */}
      <section
        className={`${
          isSidebarOpen ? "hidden" : "block"
        } lg:block w-full lg:w-[70%] bg-card_color_light rounded h-screen p-5 my-10 lg:ml-5 dark:bg-card_color_dark`}
      >
        <nav className="mb-5 text-sm text-text_color_desc_light">
          {breadcrumb.map((crumb, index) => (
            <span key={index}>
              {index > 0 && " > "}
              <button
                className="hover:underline"
                onClick={() => handleBreadcrumbClick(index)}
              >
                {crumb}
              </button>
            </span>
          ))}
        </nav>
         {/* Display the content */}
         <div className="text-gray-700 dark:text-gray-300">
          {selectedContent}
        </div>
      </section>
    </main>
  );
}
