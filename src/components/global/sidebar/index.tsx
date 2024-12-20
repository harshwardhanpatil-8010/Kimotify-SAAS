'use client'
import React from 'react'
import Image from 'next/image'
import { usePaths } from '@/hooks/user-nav'
import Items from './items'
import { Separator } from '@radix-ui/react-context-menu'
import ClerkAuthState from '../clerk-auth-state'
import { IoMdHelpCircle } from "react-icons/io"
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'
import logo from '@/app/assets/logo.png'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()
  return (
    <div className="w-[280px] border-[1px] fixed left-0 lg:inline-block border-[#8a3b8e] bg-gradient-to-br from-[#4a5ab8] via-[#1a1a1a] to-[#4a5ab8] bottom-0 top-0 m-3 rounded-xl overflow-hidden hidden shadow-lg">
      <div className="flex flex-col gap-y-6 w-full h-full p-4 bg-[#111111] bg-opacity-95 backdrop-filter backdrop-blur-2xl">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-1 text-3xl font-extrabold tracking-tight text-[#ff4d94] uppercase select-none leading-none hover:opacity-90 transition-opacity">
          <div className="w-16 h-16 relative">
            <Image
              src={logo} 
              alt="Kimotify Logo" 
              layout="fill" 
              objectFit="contain"
              priority 
              className='select-none pointer-events-none hover:scale-105 transition-transform'
            />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d94] to-[#b951c0]">KIMOTIFY</span>
        </div>

        <div className='flex flex-col py-3'>
          <Items page={page} slug={slug} />
        </div>

        <div className='flex justify-center'>
          <Separator 
            className="bg-gradient-to-r from-transparent via-[#b951c0] to-transparent h-[1px] w-[85%] mx-auto rounded-full opacity-60" 
          />
        </div>

        <div className='px-4 flex flex-col gap-y-6 text-base font-medium'>
          <div className='flex items-center gap-x-3 leading-none cursor-pointer hover:text-[#ff4d94] transition-colors'>
            <ClerkAuthState />
            <p className='text-[#9B9CA0]'>Profile</p>
          </div>
          <div className='leading-none flex items-center gap-x-3 text-[#a29f9f] cursor-pointer hover:text-[#ff4d94] transition-colors'>
            <IoMdHelpCircle className="text-xl" />
            <p>Help</p>
          </div>
        </div>

        <SubscriptionPlan type="FREE">
          <div className='flex-1 flex flex-col justify-end mt-auto'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  )
}

export default Sidebar
