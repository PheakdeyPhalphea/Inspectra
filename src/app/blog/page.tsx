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
    <div className='w-[88%] mx-auto my-[20px]'>
      <div className='flex justify-between top-0 '>
        <p className='text-text_title_24'>Blog Community</p>
        <button className='px-3 py-2 bg-primary_color text-text_color_light flex rounded-[17px] items-center justify-center'>
          Create Blog
          <FaPlus className={'ml-1'}/>
        </button>
      </div>
      <div className='flex justify-between gap-[100px]  my-5'>

        <BlogComponent />

        {/* sidebar */}
        <div className='w-[30%] hidden lg:block'>

          {/* Common Topics */}
          <div>
            <p className='text-text_title_20 text-black my-2 dark: dark:text-text_color_desc_dark'>Common Topics</p>
            <div className='py-2 flex flex-wrap gap-3'>
              {commonTopicData.map((common: CommonTopic, index) => (
                <div key={index} className='bg-text_color_dark dark:bg-card_color_dark px-4 py-2 rounded-[17px]'>
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
