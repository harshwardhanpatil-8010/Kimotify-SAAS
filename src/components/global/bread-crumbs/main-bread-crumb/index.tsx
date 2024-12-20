import { PAGE_ICON } from '@/constants/pages'
import React from 'react'

type Props = {
    page: string 
    slug?: string
}

const MainBreadCrumb = ({page,slug}: Props) => {
  return (
  <div className='flex flex-col items-start'>
    {page === 'Home' && (<div className='flex justify-center w-full'>
        <div className='radial-gradient w-4/12 py-5 lg:py-10 flex flex-col items-center'>
        <p className='text-[#aaa1a1] text-lg'>Welcome back</p>
        <h2 className='capitalize text-4xl font-medium'>{slug}!</h2>
        </div>
        </div>
    )}
    <span className='radial-gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center text-[#ffffff] text-2xl leading-none font-semibold capitalize'>
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className='font-semibold capitalize text-white'>{page}</h2>
    </span>
  </div>
  )
}

export default MainBreadCrumb