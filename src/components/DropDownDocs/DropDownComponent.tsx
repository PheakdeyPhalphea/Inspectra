"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetAllDocumentCategoriesQuery } from "@/redux/service/document";

type DropdownMenuProps = {
    searchTerm: string;
    onMenuClick: (categoryData: DocumentCategory, documentData?: Document) => void;
};

// Define types for Document
type Document = {
    uuid: string;
    documentCategoryName: string;
    title: string;
    description: string;
    createdAt: string;
    documentImages: string[];
}

//Define type for Document Category
type DocumentCategory = {
    uuid: string;
    name: string;
    description: string;
    documents: Document[];
}

export default function DropdownMenu({ onMenuClick }: DropdownMenuProps) {
    const { data: documentData } = useGetAllDocumentCategoriesQuery({});
    const documentCategoryResult = documentData?.data;
    
    return (
        <Accordion type="single" collapsible>
            {documentCategoryResult?.map((category: DocumentCategory) => (
                <AccordionItem key={category.uuid} value={category.uuid} className="p-1">
                    <AccordionTrigger className="text-[18px] leading-4" onClick={() => onMenuClick(category)}>
                        {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="ml-2 leading-9 text-text_body_16 text-text_color_desc_light">
                            {category?.documents?.map((item: Document) => (         
                                <li
                                    key={item?.uuid}
                                    className="hover:text-text_color_light flex items-center cursor-pointer transition ease-in-out delay-150 hover:border-l-2 p-2"
                                    onClick={() => onMenuClick(category, item)}
                                >
                                    {item?.title}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

