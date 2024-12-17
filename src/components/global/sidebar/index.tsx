'use client'
import React from 'react'
import Image from 'next/image' // Ensure you import this
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
    <div className="w-[250px] border-[2px] radial fixed left-0 lg:inline-block border-[#b951c0] bg-gradient-to-b from-[#5067c3] via-[#171717] to-[#5067c3] bottom-0 top-0 m-2 rounded-2xl overflow-hidden hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-2 text-3xl font-bold tracking-tighter text-[#E93B84] uppercase select-none leading-none">
          <div className="w-20 h-20 relative">
            <Image
              src={logo} 
              alt="Kimotify Logo" 
              layout="fill" 
              objectFit="contain"
              priority 
            />
          </div>
          <span>KIMOTIFY</span>
        </div>

      
        <div className='flex flex-col py-2'>
          <Items page={page} slug={slug} />
        </div>

        <div className='flex justify-center overflow-visible'>
          <Separator 
            className="bg-[#b951c0] h-[2px] w-[75%] mx-auto rounded-lg" 
          />
        </div>

      
        <div className='px-3 flex flex-col gap-y-5 text-lg leading-none'>
          <div className='flex gap-x-2 leading-none cursor-pointer'>
            <ClerkAuthState />
            <p className='text-[#9B9CA0]'>Profile</p>
          </div>
          <div className='text-lg leading-none flex gap-x-3 text-[#a29f9f] cursor-pointer'>
            <IoMdHelpCircle />
            <p className='text-[#a29f9f]'>Help</p>
          </div>
        </div>

       
        <SubscriptionPlan type="FREE">
          <div className='flex-1 flex flex-col justify-end'>
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  )
}

export default Sidebar
