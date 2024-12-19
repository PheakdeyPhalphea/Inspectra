'use client'

import React from 'react'
import { useTheme } from "next-themes";
import { useCaseData } from '@/data/useCase'
import { useCaseType } from '@/types/UseCase';
import { Check } from "lucide-react";

export default function UseCaseComponent() {
    const { theme } = useTheme();
    return (
        <div>
            <section className="w-[90%] mx-auto px-4 py-10">
                <h2 className="text-text_header_34 font-bold">Use Cases</h2>
                <div className="mt-5 grid gap-8 lg:grid-cols-2">
                    <div className="space-y-4">
                        {useCaseData.map((useCase: useCaseType, index) => (
                            <div key={index} className="p-2">
                                <div className="flex gap-2">
                                    <Check className="mt-1 shrink-0 text-ascend_color dark:text-primary_color" />
                                    <div>
                                        <p className="text-text_title_20 text-text_color_light dark:text-text_color_dark pb-3">{useCase.title}</p> <p className="text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">{useCase.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            {theme === "dark" ? (
                                <img
                                    src="/images/useCase-white.png"
                                    alt="bg-useCase"
                                />
                            ) : (
                                <img src="/images/useCase.png" alt="bg-useCase" />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
