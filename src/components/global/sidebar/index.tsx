'use client'
import React from 'react'
import { usePaths } from '@/hooks/user-nav'

type Props = {
    slug: string
}

const Sidebar = ({slug}: Props) => {
    const {page} = usePaths()
  return <div className="w-[250px] border-2 radial fxed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
    
  </div>
  
}

export default Sidebar