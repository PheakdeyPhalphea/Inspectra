'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function ScanHistoryComponent() {

    const router = useRouter();

    return (
        <div>
            {/* header */}
            <div className="flex justify-between">
                <p className="text-text_title_20 text-text_color_light dark:text-text_color_dark">Scan History</p>
                <div className="flex gap-3 text-text_body_16 text-text_color_desc_light dark:text-text_color_desc_dark">
                    <button onClick={() => router.push('/blogHistory')}>
                        Blog <span className="hidden md:inline-block">History</span>
                    </button>
                    <span>/</span>
                    <p className="text-ascend_color">
                        Scan <span className="hidden md:inline-block">History</span>
                    </p>
                    <span>/</span>
                    <button onClick={() => router.push('/myProfile')}>Profile <span className="hidden md:inline-block">Setting</span></button>
                </div>
            </div>
        </div>
    )
}
