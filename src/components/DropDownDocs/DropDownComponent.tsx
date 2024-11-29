"use client"

import * as React from "react"
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

// Example data with proper typing
const accordionData: AccordionItemData[] = [
    {
        id: "item-1",
        question: "Introduction",
        answers: [
            "Overview",
            "Key Features",
            "Use Cases",
            "Why Choose Inspectra"
        ],
    },
    {
        id: "item-2",
        question: "Getting Started",
        answers: [
            "Quick Start Guide",
            "First Scan",
        ],
    },
    {
        id: "item-3",
        question: "User Guide",
        answers: [
            "Scanning Projects",
            "Understanding Results",
            "Exporting Reports"
        ],
    },
    {
        id: "item-4",
        question: "Technical Guide",
        answers: [
            "Framework and Langauges",
            "Integrations",
            "Database Support",
            "Security Standard"
        ],
    },
];

export default function DropdownMenu({ onMenuClick }: DropdownMenuProps) {
    return (
        <Accordion type="single" collapsible>
        {accordionData.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="p-1">
                <AccordionTrigger className="text-[18px] leading-4" onClick={() => onMenuClick(item.question)}>
                    {item.question}
                </AccordionTrigger>
                <AccordionContent>
                    <ul className="ml-2 leading-9 text-text_body_16 text-text_color_desc_light">
                        {item.answers.map((answer, index) => (
                            <li 
                                key={index} 
                                className="hover:text-text_color_light flex items-center cursor-pointer transition ease-in-out delay-150 hover:border-l-2 p-2"
                                onClick={() => onMenuClick(item.question, answer)}
                                >
                                {answer}
                            </li>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
    )
}
