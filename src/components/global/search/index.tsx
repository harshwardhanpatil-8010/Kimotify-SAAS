import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='lg:flex overlflow-hidden gap-x-2 border-[1px] border-[#1c3dbf] rounded-2xl px-4 py-1 items-center flex-1 cursor-pointer'>
        <SearchIcon color="#3352CC"/>
        <Input
        placeholder="Search by name, email or status"
        className='border-none outline-none ring-0 focus:ring-0 flex-1 cursor-text'
        />
    </div>
  )
}

export default Search