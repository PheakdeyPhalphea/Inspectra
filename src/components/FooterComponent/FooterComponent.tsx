"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useTheme } from "next-themes";
import { MdEmail } from "react-icons/md";
export default function FooterComponent() {
  const { theme } = useTheme();
  return (
    <footer className="w-[95%] md:w-[98%] rounded-lg bg-card_color_light dark:bg-card_color_dark h-full mx-auto">
      <div className="w-[95%] flex flex-col md:flex-row justify-between mx-auto space-y-5 md:space-y-0">
        {/* Section 1: Logo */}
        <section className="w-full md:w-[30%]">
          <div className="p-2 md:p-5">
            <div className="flex items-center">
              <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                <img
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-text_body_16 ml-2 text-text_color_light dark:text-text_color_dark">
                Inspectra
              </span>
            </div>
            {/* Content */}
            <div className="text-text_body_16 lg:text-text_title_24 text-text_color_light dark:text-text_color_dark mt-5">
              <div className="flex md:block lg:flex">
                <p className="mr-2">See the</p>
                <span className="md:text-text_body_16 lg:text-text_title_24 text-secondary_color">
                  Unseen
                </span>
              </div>
              <div className="flex md:block lg:flex">
                <p className="mr-2">Secure the</p>
                <span className="md:text-text_body_16 lg:text-text_title_24 text-secondary_color">
                  Unknown
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Features and Others */}
        <section className="w-full md:w-[65%] flex flex-col md:flex-row justify-between">
          {/* Features */}
          <div className="p-2 w-[20%] md:p-5">
            <div className="text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Feature
            </div>
            <div className="mt-5">
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                Home
              </Link>
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                Project
              </Link>
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                Use Case
              </Link>
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                Document
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="p-2 w-[20%] md:p-5">
            <div className="text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Support
            </div>
            <div className="mt-5">
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                Blog
              </Link>
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                FAQs
              </Link>
              <Link
                className="my-3 block text-text_body_16 text-text_color_light dark:text-text_color_dark"
                href="/#"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Sponsors */}
          <div className="p-2 w-full md:p-5">
            <div className="text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
              Our Sponsors
            </div>
            <div className="w-[90%] flex flex-wrap justify-between lg:space-y-0 space-y-4 lg:flex-row xl:grid xl:grid-cols-3 xl:gap-4 mt-5">
              {/* First Image */}
              <div className="flex justify-center">
                <img
                  src="/images/CBRD_Logo.png"
                  alt="Logo"
                  className="object-contain w-[200px] h-auto"
                />
              </div>

              {/* Second Image */}
              <div className="flex justify-center">
                <img
                  src="/images/MPTC-Logo.png"
                  alt="Logo"
                  className="object-contain w-[200px] h-auto"
                />
              </div>

              {/* Third Image */}
              <div className="flex justify-center  ">
                <div className="w-[200px] h-auto flex items-center justify-center">
                  {theme === "dark" ? (
                    <img
                      src="/images/White-CSTAD-Logo.png"
                      alt="Logo"
                      className="object-contain w-full h-auto"
                    />
                  ) : (
                    <img
                      src="/images/Dark-CSTAD-Logo.png"
                      alt="Logo"
                      className="object-contain w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-[95%] mx-auto flex flex-col md:flex-row border-t border-text_color_desc_light dark:border-text_color_desc_dark py-5 space-y-4 mt-5 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
          © 2024 Inspectra Inc. <br /> All rights reserved.
        </div>

        {/* Social Links Section */}
        <section className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:flex md:flex-row justify-end items-center text-text_color_desc_light dark:text-text_color_desc_dark mx-auto">
          {/* GitHub Card */}
          <div className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-text_color_desc_light hover:text-text_color_dark">
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </div>

          {/* Facebook Card */}
          <div className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-text_color_desc_light hover:text-text_color_dark">
            <FaFacebook className="w-5 h-5" />
            <span>Facebook</span>
          </div>

          {/* Telegram Card */}
          <div className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-text_color_desc_light hover:text-text_color_dark">
            <FaTelegram className="w-5 h-5" />
            <span>Telegram</span>
          </div>

          {/* Email Card */}
          <div className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-text_color_desc_light hover:text-text_color_dark">
            <MdEmail className="w-5 h-5" />
            <span>Email</span>
          </div>
        </section>
      </section>
    </footer>
  );
}
