

'use client'

import { useGetBlogDetailsQuery } from "@/redux/service/blog";
import { Button } from "@/components/ui/button";
import { MdReport } from "react-icons/md";
import { convertToDayMonthYear } from "@/lib/utils";
import { FaCalendarAlt, FaCommentDots, FaEye } from "react-icons/fa";
import React, {useEffect, useState} from "react";
import { FaHandsClapping } from "react-icons/fa6";
import { useLikeBlogMutation } from "@/redux/service/blog";
import BlogUserCardComponent from "@/components/BlogComponent/BlogUserCardComponent";
import { MdClear } from "react-icons/md";


import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea";
import {useReportMutation} from "@/redux/service/report";
import CommentSection from "@/components/CommentComponent/CommentComponent";

type BlogDetailsProps = {
    uuid: string;
}

type ReportProps = {
    blogUuid:string;
    message:string;
}

export default function BlogDetailsComponent({ uuid }: BlogDetailsProps) {

    const [report, setReport] = useState("");

    const [createReport] = useReportMutation();

    const [showSidebar, setShowSidebar] = useState(false);

    const handleSubmitReport = async ({ blogUuid, message }: ReportProps) => {
        try {
            const res = await createReport({ report: { blogUuid, message } });
            setReport("");
            console.log("Report response:", res);
        } catch (error) {
            console.error("Error reporting the blog:", error);
        }
    }

    const [blogData, setBlogData] = useState<{ data?: any }>({});

    const { data } = useGetBlogDetailsQuery({ uuid: uuid });

    useEffect(() => {
        setBlogData(data);
    }, [data]);

    const [likeBlog] = useLikeBlogMutation();

    const [likeColor, setLikeColor] = useState(false);

    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const connectWebSocket = () => {

            const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL as string);

            ws.onopen = () => {
                console.log('WebSocket connection established.');
            };

            ws.onmessage = (event) => {
                try {
                    const newBlog = JSON.parse(event.data);
                    console.log("New blog from WebSocket:", newBlog);

                    // Directly update the blogData with the new blog, ensuring re-render
                    if (newBlog.uuid === uuid) {
                        setBlogData((prevData) => ({
                            ...prevData,
                            data: { ...prevData.data, ...newBlog },
                        }));
                    }
                } catch (error) {
                    console.error("Error parsing WebSocket message:", error);
                }
            };

            ws.onerror = () => {
                console.error('WebSocket connection failed. Retrying...');
                setTimeout(connectWebSocket, 5000);
            };

            ws.onclose = () => {
                console.error('WebSocket connection closed. Retrying...');
                setTimeout(connectWebSocket, 5000);
            };

            setSocket(ws);
        };

        if (!socket) connectWebSocket();

        return () => {
            socket?.close();
        };
    }, [socket, uuid]);

    const handleLike = async (blogUuid: string) => {

        try {
            const res = await likeBlog({ uuid: blogUuid });
            setLikeColor(true);

            if (socket) {
                socket.send(
                    JSON.stringify({
                        type: "like",
                        blogUuid: blogUuid,
                        userUuid: blogData?.data?.user?.uuid,
                    })
                );
            }

            console.log("Like blog response:", res);
        } catch (error) {
            console.error("Error liking the blog:", error);
        }
    };

    return (
        <section className={'w-[88%] mx-auto'}>
            <div className={'flex items-end justify-end gap-3'}>
                <div>
                    <Button className={'bg-[#B9FF66] text-black rounded-[16px]'}>Update Blog</Button>
                </div>

                <Dialog>
                    <DialogTrigger asChild>
                        <div className={'bg-black rounded-[16px]'}>
                            <MdReport className={'text-orange-400 text-[40px] cursor-pointer'} />
                        </div>
                    </DialogTrigger>

                    <DialogContent className={'bg-white max-w-md '}>
                        <DialogHeader>
                            <DialogTitle>Report</DialogTitle>
                        </DialogHeader>
                        <Textarea
                            placeholder="Write your concern here..."
                            value={report}
                            onChange={(e) => setReport(e.target.value)}
                            className="mt-4"
                        />
                        <div className="flex justify-end">
                            <Button
                                onClick={() => handleSubmitReport({blogUuid:uuid, message:report})}
                                className="bg-primary_color px-3 text-text_color_light rounded-tl-[20px] rounded-br-[20px] w-[110px] h-[36px] text-text_body_16"
                            >
                                Submit
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className={'w-[60%] mx-auto'}>
                <p className={'text-[34px] font-bold'}>{blogData?.data?.title}</p>

                <div className={'flex text-[16px] my-5 gap-[35px]'}>
                    <div className={'flex items-center'}>
                        <img className={'w-10 justify-center items-center rounded-full h-10 inline-block'} src={blogData?.data?.user?.profile}
                             alt={'profile'} />
                        <p className={'ml-2'}>{blogData?.data?.user?.firstName + blogData?.data?.user?.lastName}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaCalendarAlt className='text-text_color_desc_light text-[24px] dark:text-text_color_desc_dark' />
                        <p>{convertToDayMonthYear(blogData?.data?.createdAt)}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaEye className='text-text_color_desc_light text-[24px]  dark:text-text_color_desc_dark' />
                        <p>{blogData?.data?.viewsCount}</p>
                    </div>

                    <div className='flex gap-2 items-center justify-center'>
                        {likeColor ? (
                            <FaHandsClapping className='text-orange-400 text-[24px]   cursor-pointer'
                                             onClick={() => handleLike(blogData?.data?.uuid)} />
                        ) : (
                            <FaHandsClapping
                                className='cursor-pointer text-[24px]  text-text_color_desc_light  dark:text-text_color_desc_dark'
                                onClick={() => handleLike(blogData?.data?.uuid)} />
                        )}
                        <p>{blogData?.data?.likesCount}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaCommentDots  onClick={() => setShowSidebar(!showSidebar)} className='cursor-pointer text-text_color_desc_light text-[24px]  dark:text-text_color_desc_dark' />
                        <p>{blogData?.data?.countComments}</p>
                    </div>
                </div>

                <div>
                    <img className={'w-full h-[400px] object-cover mt-5'} src={blogData?.data?.thumbnail[0]} alt={'thumbnail'} />
                </div>

                <div className={'mt-5'}>
                    <p>{blogData?.data?.description}</p>
                </div>
            </div>

            <section className={'mt-5'}>
                <hr />
                <BlogUserCardComponent uuid={blogData?.data?.user?.uuid} />
            </section>

            {showSidebar && (
                <div
                    className={`fixed px-5 overflow-y-auto scrollbar-hide right-0 top-0 h-full w-[30%] bg-white shadow-lg z-50 transform transition-transform duration-1000 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>

                    <p className={'font-bold mt-3'}>User Response</p>
                    <button
                        className="absolute top-4 right-4 text-gray-600"
                        onClick={() => setShowSidebar(false)}
                    >
                        <MdClear />
                    </button>

                    <CommentSection uuid={uuid}/>
                </div>
            )}
        </section>
    );
}