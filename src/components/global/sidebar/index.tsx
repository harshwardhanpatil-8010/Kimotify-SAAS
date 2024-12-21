'use client'
import React from 'react'
import Head from 'next/head'
import { usePaths } from '@/hooks/user-nav'
import Items from './items'
import { Separator } from '@radix-ui/react-context-menu'
import ClerkAuthState from '../clerk-auth-state'
import { IoMdHelpCircle } from "react-icons/io"
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'

type Props = {
  slug: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()
  return (
    <>
      <Head>
        <title>Kimotify - Your Ultimate Music Experience</title>
        <meta name="description" content="Kimotify - The best music streaming platform with personalized playlists, high-quality audio, and seamless experience" />
        <meta name="keywords" content="music, streaming, playlists, audio, songs, artists, albums" />
        <meta property="og:title" content="Kimotify - Your Ultimate Music Experience" />
        <meta property="og:description" content="Stream millions of songs with Kimotify" />
      </Head>

      <div className="w-[280px] border-[1px] fixed left-0 lg:inline-block border-[#8a3b8e] bg-gradient-to-br from-[#4a5ab8] via-[#1a1a1a] to-[#4a5ab8] bottom-0 top-0 m-3 rounded-xl overflow-hidden hidden shadow-2xl backdrop-blur-lg">
        <div className="flex flex-col gap-y-6 w-full h-full p-4 bg-[#111111] bg-opacity-95 backdrop-filter backdrop-blur-2xl">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-1 mt-3 text-3xl justify-center font-extrabold tracking-tight uppercase select-none leading-none group">
            <span className="text-transparent bg-clip-text justify-center bg-gradient-to-r from-[#ff4d94] via-[#ff71a9] to-[#b951c0] hover:from-[#b951c0] hover:to-[#ff4d94] transition-all duration-300">
              KIMOTIFY
            </span>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col py-3 transition-all duration-300">
            <Items page={page} slug={slug} />
          </div>

          {/* Separator */}
          <div className="flex justify-center">
            <Separator className="bg-gradient-to-r from-transparent via-[#b951c0] to-transparent h-[1px] w-[85%] mx-auto rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Profile and Help */}
          <div className="px-4 flex flex-col gap-y-6 text-base font-medium">
            <div className="flex items-center gap-x-3 leading-none cursor-pointer hover:text-[#ff4d94] transition-all duration-300 transform hover:translate-x-2">
              <ClerkAuthState />
              <p className="text-[#9B9CA0] group-hover:text-[#ff4d94]">Profile</p>
            </div>
            <div className="leading-none flex items-center gap-x-3 text-[#a29f9f] cursor-pointer hover:text-[#ff4d94] transition-all duration-300 transform hover:translate-x-2">
              <IoMdHelpCircle className="text-xl animate-bounce" />
              <p>Help</p>
            </div>
          </div>

          {/* Upgrade Card */}
          <div className="flex-1 flex justify-end items-center mt-auto transform transition-all duration-300 hover:scale-105 ">
            <SubscriptionPlan type="FREE">
              <UpgradeCard />
            </SubscriptionPlan>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
