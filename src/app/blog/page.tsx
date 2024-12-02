import React from 'react'
import { Metadata } from 'next';
import BlogComponent from '@/components/BlogComponent/BlogComponent';
import { FaCommentDots } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Blog - Inspectra",
  description:
    "Learn more about Inspectra, a white-box testing platform designed to review source code and identify security weaknesses. Discover our mission, values, and commitment to secure development.",
};

export default function page() {
  return (
    <div className='w-[90%] mx-auto my-[60px]'>
      <div className='flex justify-between'>
        <p className='text-text_title_24'>Blog Community</p>
        <button className='px-3 py-2 bg-primary_color flex gap-3 rounded-lg items-center'>
          <FaPlus />
          Create Blog
        </button>
      </div>
      <div className='flex justify-between gap-10 my-10'>
        <BlogComponent />
        <div className='w-[50%] hidden lg:block'>

          {/* Common Topics */}
          <div>
            <p className='text-text_title_20 text-text_color_desc_light dark: dark:text-text_color_desc_dark'>Common Topics</p>
            <div className='py-3 flex flex-wrap gap-3'>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2 rounded-xl'>XSS Injection</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>Programming</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>White Hat Hacker</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>Self Improvement</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>CIA Triad</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>Chatgpt</div>
              <div className='bg-text_color_dark dark:bg-card_color_dark dark:text-text_color_dark px-3 py-2  rounded-xl'>Linux Command</div>
            </div>

            {/* Recent Posts */}
            <div>
              <p className='text-text_title_20 text-text_color_desc_light dark: dark:text-text_color_desc_dark'>Recent Posts</p>
              <div className='py-3'>
                <div className='rounded-lg overflow-hidden flex'>
                  <div className='w-[40%] h-auto'>
                    <img className='w-full h-full object-cover' src="/images/helen.jpg" alt="thumbnail" />
                  </div>
                  <div className='bg-text_color_dark dark:bg-card_color_dark p-2'>
                    <p className='line-clamp-2'>9 requently used malware in cyberattacks you need to avoid.</p>
                    <div className='flex gap-5 pt-5'>
                      <div className='flex gap-3 items-center'>
                        <FaHandsClapping />
                        504
                      </div>
                      <div className='flex gap-3 items-center'>
                        <FaCommentDots />
                        79
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
