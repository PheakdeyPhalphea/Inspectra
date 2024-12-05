import React from 'react'
import { Metadata } from 'next';
import BlogComponent from '@/components/BlogComponent/BlogComponent';
import RecentPostComponent from '@/components/BlogComponent/RecentPostComponent';
import { FaPlus } from "react-icons/fa6";
import { commonTopicData } from '@/data/commonTopic';
import { CommonTopic } from '@/types/CommonTopic';

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
        <button className='px-3 py-2 bg-primary_color text-text_color_light flex gap-3 rounded-lg items-center'>
          <FaPlus />
          Create Blog
        </button>
      </div>
      <div className='flex justify-between gap-10 my-10'>
        <BlogComponent />

        {/* sidebar */}
        <div className='w-[50%] hidden lg:block'>

          {/* Common Topics */}
          <div>
            <p className='text-text_title_20 text-text_color_desc_light dark: dark:text-text_color_desc_dark'>Common Topics</p>
            <div className='py-3 flex flex-wrap gap-3'>
              {commonTopicData.map((common: CommonTopic, index) => (
                <div key={index} className='bg-text_color_dark dark:bg-card_color_dark p-2 rounded-lg'>
                  {common.topic}
                </div>
              ))}

              {/* Recent Posts */}
              <RecentPostComponent/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
