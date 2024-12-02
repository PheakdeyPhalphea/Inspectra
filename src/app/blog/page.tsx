import React from 'react'
import { Metadata } from 'next';
import BlogComponent from '@/components/BlogComponent/BlogComponent';

export const metadata: Metadata = {
    title: "Blog - Inspectra",
    description:
      "Learn more about Inspectra, a white-box testing platform designed to review source code and identify security weaknesses. Discover our mission, values, and commitment to secure development.",
  };  

export default function page() {
  return (
    <div className='w-[90%] mx-auto my-[60px]'>
        <div className='text-text_title_24'>Blog Community</div>
        <div className='flex gap-3'>
        <BlogComponent/>
        </div>
    </div>
  )
}
