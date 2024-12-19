'use client'

import React from 'react'
import { FaCalendarAlt, FaEye, FaCommentDots } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { Blog} from '@/types/Blog';
import { useGetAllBlogQuery } from '@/redux/service/blog';
import { convertToDayMonthYear } from "@/lib/utils";

export default function BlogComponent() {
    const { data: blogData } = useGetAllBlogQuery({ page: 0, pageSize: 10 });
    const blogList = blogData?.content;
    return (
        <div>
            {/* blog card */}
            <section>
                {blogList?.map((blog: Blog, index: number) => (
                    <div key={index} className='flex flex-nowrap justify-between items-center border-b border-b-text_color_desc_light dark:border-b-text_color_desc_dark py-5 mb-3'>
                        <div className='flex flex-col gap-3 w-full'>

                            {/* profile */}
                            <div className='flex gap-3 items-center'>
                                <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={blog?.user?.profile} alt="profile" />
                                </div>
                                <p className='text-text_color_desc_light dark:text-text_color_desc_dark'>{blog?.user?.firstName} {blog?.user?.lastName}</p>
                            </div>

                            {/* title */}
                            <p className='text-text_body_16 md:text-text_title_20 text-text_color_light dark:text-text_color_dark'>{blog?.title}</p>

                            {/* description */}
                            <p className='text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark line-clamp-2'>{blog?.description}</p>

                            {/* created at */}
                            <div className='flex gap-5'>
                                <div className='flex gap-2 items-center'>
                                    <FaCalendarAlt className='text-text_color_desc_light dark:text-text_color_desc_dark' />
                                    <p>{convertToDayMonthYear(blog?.createdAt)}</p>
                                </div>

                                {/* view */}
                                <div className='flex gap-2 items-center'>
                                    <FaEye className='text-text_color_desc_light dark:text-text_color_desc_dark' />
                                    <p>{blog?.viewsCount}</p>
                                </div>

                                {/* like */}
                                <div className='flex gap-2 items-center'>
                                    <FaHandsClapping className='text-text_color_desc_light dark:text-text_color_desc_dark' />
                                    <p>{blog?.likesCount}</p>
                                </div>

                                {/* comment */}
                                <div className='flex gap-2 items-center'>
                                    <FaCommentDots className='text-text_color_desc_light dark:text-text_color_desc_dark' />
                                    <p>{blog?.countComments}</p>
                                </div>
                            </div>
                        </div>

                        {/* thumbnail */}
                        <div className='w-[40%] h-[90%] hidden md:block'>
                            <img className='w-full h-full object-cover rounded-xl' src={blog?.thumbnail[0]} alt="thumbnail" />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
