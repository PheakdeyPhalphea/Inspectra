"use client"

import * as React from "react"
import { RiArrowRightSFill } from "react-icons/ri";
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

// Example data with proper typing
const accordionData: AccordionItemData[] = [
    {
        id: "item-1",
        question: "Introduction",
        answers: [
            "Yes, it adheres to the WAI-ARIA design pattern.",
            "Screen readers can easily navigate the content.",
        ],
    },
    {
        id: "item-2",
        question: "Can I customize it?",
        answers: [
            "Yes, you can use TailwindCSS classes.",
            "You can also override styles with custom CSS.",
        ],
    },
    {
        id: "item-3",
        question: "Is it responsive?",
        answers: [
            "Yes, it adapts to different screen sizes.",
            "It works well on both desktop and mobile devices.",
        ],
    },
];

export default function DropdownMenu() {
    return (
        <Accordion type="single" collapsible>
        {accordionData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="p-1">
                <AccordionTrigger 
                    className="
                        text-[18px] leading-4" 
                    >
                        {item.question}
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="ml-2 leading-9 text-text_body_16 text-text_color_desc_light">
                        {item.answers.map((answer, index) => (
                            <li key={index} className="hover:text-text_color_light flex items-center cursor-pointer transition ease-in-out delay-150 hover:border-l-2 p-2">{answer}</li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
    )
}
