"use client"

import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Define the type for each accordion item
interface AccordionItemData {
    id: string;
    question: string;
    answers: string[];
}

type DropdownMenuProps = {
    onMenuClick: (question: string, answer?: string) => void;
};

// Define types for API responses
interface DocumentCategory {
    uuid: string;
    name: string;
}

interface DocumentSubmenu {
    uuid: string;
    documentCategoryName: string;
    title: string;
}

export default function DropdownMenu({ onMenuClick }: DropdownMenuProps) {
    const [categories, setCategories] = useState<DocumentCategory[]>([]);
    const [loadingCategories, setLoadingCategories] = useState(true); // For category loading state

    // Fetch all categories on component mount
    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch(
                    "http://136.228.158.126:4011/api/v1/document-category/page?page=0&size=25"
                );
                const data = await response.json();
                setCategories(data.content);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            } finally {
                setLoadingCategories(false);
            }
        }
        fetchCategories();
    }, []);

    if (loadingCategories) return <div>Loading...</div>;

    return (
        <Accordion type="single" collapsible>
            {categories.map((category) => (
                <AccordionItem key={category.uuid} value={category.uuid} className="p-1">
                    <AccordionTrigger className="text-[18px] leading-4">
                        {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                        ds
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}


{/* <ul className="ml-2 leading-9 text-text_body_16 text-text_color_desc_light">
    {subMenus
        .filter((submenu) => submenu.documentCategoryName === category.uuid)
        .map((submenu) => (
            <li
                key={submenu.uuid}
                className="hover:text-text_color_light flex items-center cursor-pointer transition ease-in-out delay-150 hover:border-l-2 p-2"
                onClick={() => onMenuClick(category.name, submenu.title)}
            >
                {submenu.title}
            </li>
        ))}
</ul> */}

