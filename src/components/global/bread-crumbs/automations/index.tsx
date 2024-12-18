import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import ActivateAutomationButton from '../../activate-automation-button';
type Props = {
    id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
    
    return (
        <div className='rounded-full w-full p-5 bg-[#18181B1A] flex items-center'>
            <div className='flex items-center gap-x-2 min-w-0'>
                <p className='text-[#9B9CA0] leading-none truncate'>Automations</p>
                <FaChevronRight color="#9B9CA0" className='leading-none mt-[1px] flex-shrink-0'/>
                <span className='flex gap-x-3 items-center min-w-0'>
                    <p className='text-[#9B9CA0] truncate'>This is the automation title</p>
                    <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'>
                    <LuPencilLine size={14}/>
                    </span>
                </span>
            </div>
            <div className='flex gap-x-5 items-center ml-auto'>
                <p className='text-text-secondary/60 text-sm truncate min-w-0 hidden md:block'>
                    All updates are automatically saved
                </p>
                <div className='flex gap-x-5 flex-shrink-0'>
                    <p className='text-text-secondary text-sm truncate min-w-0'>Changes Saved</p>
                </div>
            </div>
            <ActivateAutomationButton />
        </div>
    )
    
}

export default AutomationsBreadCrumb