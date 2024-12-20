import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
  onSearch?: (searchTerm: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(searchTerm);
    }
  };

  return (
    <div className="flex items-center gap-3 border-2 border-[#1c3dbf] rounded-2xl px-4 py-2 w-full max-w-lg mx-auto leading-none shadow-sm hover:shadow-md transition-all duration-200 group focus-within:border-[#3352CC] focus-within:shadow-lg">
      <SearchIcon 
        color="#3352CC"
        className="flex-none sm:block w-5 h-5 hover:scale-110 transition-transform cursor-pointer" 
        onClick={() => onSearch?.(searchTerm)}
      />
      <Input
        value={searchTerm}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        placeholder="Search by name, email, or status"
        className="border-transparent hover:border-[#FFF] outline-none hover:border-spacing-1 ring-0 focus:ring-0 flex-1 text-sm sm:text-base leading-none cursor-text"
        aria-label="Search input"
      />
    </div>
  );
};

export default Search;
