"use client"

import React from 'react'
import { useTheme } from "next-themes";

import { mentorData } from '@/data/mentor';
import Link from 'next/link';
import { AboutUs, SocialMedia } from '@/types/AboutUs';

export default function MentorComponent() {
  const { theme } = useTheme();
  return (
    <div>
      <section className='relative my-[60px]'>
        <div className='absolute top-0 -z-20 hidden md:block w-full'>
          {theme === "dark" ? (
            <img
              src="/images/about us background_white.png"
              alt="bg-aboutus"
              className='object-cover w-[100%] h-[100%]'
            />
          ) : (
            <img src="/images/about us background.png" alt="bg-aboutus" className='object-cover w-[100%] h-[100%]' />
          )}
        </div>
        <div className='w-[90%] mx-auto text-center md:pt-20 lg:pt-24'>
          <div>
            <div className='text-[20px] md:text-[30px] xl:text-[40px] inline-flex px-5 font-semibold bg-primary_color dark:bg-text_color_light py-2 rounded-tl-[20px] rounded-br-[20px]'>
              <p className='text-text_color_light dark:text-primary_color'>Meet Our Mentor</p>
            </div>
            <div className='w-[90%] mx-auto'>
              <p className='text-text_color_desc_light md:text-text_color_dark dark:text-text_color_desc_dark dark:md:text-text_color_light text-text_title_16 my-5'>Meet our diverse mentors of world-class Frontend and Backend Developer</p>
            </div>
          </div>

          {/* mentors card */}
          <div>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {mentorData.map((mentor: AboutUs, index) => (
                <div
                  key={index}
                >
                  {/* Mentor Name */}
                  <div className='text-text_body_16 inline-flex px-5 font-semibold bg-primary_color dark:bg-text_color_light py-2 rounded-tl-[20px] rounded-br-[20px]'>
                    <p className='text-text_color_light dark:text-primary_color'>{mentor.name}</p>
                  </div>

                  {/* Mentor Image */}
                  <div className='my-3'>
                    <img
                      src={mentor.image}
                      alt={`${mentor.name}'s profile`}
                      className="w-60 h-60 mx-auto object-contain"
                    />
                  </div>

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-4">
                    {mentor.socialMedia.map((social: SocialMedia, idx) => (
                      <Link
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={`Link to ${mentor.name}'s ${social.platform}`}
                      >
                        <social.icon className="w-6 h-6 text-text_color_desc_dark hover:text-text_color_light dark:hover:text-primary_color transition-colors duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
