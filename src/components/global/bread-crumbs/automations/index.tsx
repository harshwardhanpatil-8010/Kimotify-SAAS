'use client'
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import ActivateAutomationButton from '../../activate-automation-button';
import { useQueryAutomation } from '@/hooks/user-queries';
import { useEditAutomation } from '@/hooks/use-automations';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { Input } from '@/components/ui/input';
type Props = {
    id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
    const { data } = useQueryAutomation(id)
    const { edit,enableEdit,  disableEdit,  inputRef, isPending } = useEditAutomation(id)
    const { latestVariable } = useMutationDataState(['update-automation'])
    return (
        <div className='rounded-full w-full p-5 bg-[#18181B1A] flex items-center'>
            <div className='flex items-center gap-x-2 min-w-0'>
                <p className='text-[#9B9CA0] leading-none truncate'>Automations</p>
                <FaChevronRight color="#9B9CA0" className='leading-none mt-[1px] flex-shrink-0'/>
                <span className='flex gap-x-3 items-center min-w-0'>
                   {edit ? (<Input ref={inputRef}
                   placeholder={ isPending ? latestVariable.variables : 'Add a new name'}
                   className='bg-transparent h-auto outline-none text-base border p-0'/>
                   ) : (<p className='text-[#9B9CA0] truncate'> {latestVariable?.variables ? latestVariable?.variables.name : data?.data?.name} 
                   
                   </p>)} 
                    {edit ? (<></>) : (<span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4' onClick={enableEdit}>
                                     <LuPencilLine size={14}/>
                                    </span>)}
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