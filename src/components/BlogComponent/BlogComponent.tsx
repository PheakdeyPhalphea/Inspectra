import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function BlogComponent() {
    return (
        <div>

            {/* blog card */}
            <section>
                <div className='flex justify-between items-center border border-t-text_color_desc_light dark:border-t-text_color_desc_dark'>
                    <div className='flex flex-col gap-3 bg-red-300'>
                        <div>
                            <img src="" alt="" />
                            <p>Name</p>
                        </div>
                        <p>title</p>
                        <p>desc</p>
                        <div className='flex gap-3'>
                        <div>
                        icon
                        <p></p>
                    </div>
                        </div>
                    </div>
                   
                </div>
            </section>

            {/* pagination section */}
            <section>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </div>
    )
}
