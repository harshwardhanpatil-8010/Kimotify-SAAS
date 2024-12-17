'use client'
import React, { useMemo } from 'react'
import { usePaths } from '@/hooks/user-nav'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import Sheet from '../sheet'
import { Menu } from 'lucide-react'
import Items from '../sidebar/items'
import { Separator } from '@radix-ui/react-context-menu'
import ClerkAuthState from '../clerk-auth-state'
import { IoMdHelpCircle } from 'react-icons/io'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import CreateAutomation from '../create-automation'
import Search from '../search'
import { Notifications } from './notifications'
import MainBreadCrumb from '../main-bread-crumb'

type Props = {
  slug: string
}

const Navbar = ({ slug }: Props) => {
  const { page } = usePaths()

  // Memoizing currentPage to avoid unnecessary re-evaluation on every render
  const currentPage = useMemo(() => {
    return PAGE_BREAD_CRUMBS.includes(page) || page === slug
  }, [page, slug])

  if (!currentPage) return null

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-3 lg:gap-x-5 justify-end">
        {/* Mobile sheet toggle button */}
        <span className="lg:hidden flex items-center flex-1 gap-x-2">
          <Sheet
            trigger={<Menu />}
            className="lg:hidden"
            side="left"
          >
            <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
              <div className="flex gap-y-2 items-center p-5 justify-center text-3xl font-bold tracking-tighter text-[#E93B84] uppercase select-none">
                KIMOTIFY
              </div>
              <div className="flex flex-col py-3">
                <Items page={page} slug={slug} />
              </div>
              <div className="flex justify-center overflow-visible">
                <Separator className="bg-[#b951c0] h-[2px] w-[75%] mx-auto rounded-lg" />
              </div>
              <div className="px-3 flex flex-col gap-y-5 text-lg leading-none">
                <div className="flex gap-x-2 leading-none cursor-pointer">
                  <ClerkAuthState />
                  <p className="text-[#9B9CA0]">Profile</p>
                </div>
                <div className="text-lg leading-none flex gap-x-3 text-[#a29f9f] cursor-pointer">
                  <IoMdHelpCircle />
                  <p className="text-[#a29f9f]">Help</p>
                </div>
              </div>
              <SubscriptionPlan type="FREE">
                <div className="flex-1 flex flex-col justify-end">
                  <UpgradeCard />
                </div>
              </SubscriptionPlan>
            </div>
          </Sheet>
        </span>
        <Search />
        <CreateAutomation />
        <Notifications />
      </div>
      <MainBreadCrumb page={page === slug ? 'Home': page}
       slug={slug}
        />
    </div>
  )
}

export default Navbar
