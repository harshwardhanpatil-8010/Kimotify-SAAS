import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
  page: string
  slug: string
}

const Items = ({ page, slug }: Props) => {
    return SIDEBAR_MENU.map((item) => (
      <Link
        key={item.id}
        href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label}`}
        className={cn(
          'capitalize flex items-center gap-x-3 rounded-full p-3', 
          page === item.label && 'bg-[#0f0f0f]',
          page === slug && item.label === 'home'
            ? 'bg-[#0f0f0f]'
            : 'text-[#a29f9f]'
        )}
      >
        <span className="text-lg leading-none">{item.icon}</span>
        <span className="leading-none">{item.label}</span> 
      </Link>
    ))
  }
  

export default Items