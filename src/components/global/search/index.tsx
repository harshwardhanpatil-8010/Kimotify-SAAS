import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React from 'react';

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="flex items-center gap-2 border-[1px] border-[#1c3dbf] rounded-2xl px-3 py-1 w-full max-w-lg mx-auto leading-none">
      <SearchIcon 
        color="#3352CC" 
        className="flex-none sm:block w-5 h-5" 
      />
      <Input
        placeholder="Search by name, email, or status"
        className="border-none outline-none ring-0 focus:ring-0 flex-1 text-sm sm:text-base leading-none cursor-text"
      />
    </div>
  );
};

export default Search;
