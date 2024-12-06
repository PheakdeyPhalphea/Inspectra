import React from 'react'
import { Metadata } from 'next';
import MyProfileComponent from '@/components/MyProfileComponent/MyProfileComponent';

export const metadata: Metadata = {
    title: "My profile - Inspectra",
    description:
        "Change up your profile here",
};

export default function page() {
    return (
        <div className='w-[90%] mx-auto my-[60px]'>
            <MyProfileComponent /> 
        </div>
    )
}
