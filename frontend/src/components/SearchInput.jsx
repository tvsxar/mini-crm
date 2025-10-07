import { useContext, useState, useEffect } from 'react';

import CustomersContext from '../context/CustomersContext';

import searchIcon from '../assets/search-outline.svg';

function SearchInput() {
    const { setSearchQuery } = useContext(CustomersContext);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const delay = setTimeout(() => {
            setSearchQuery(searchInput);
        }, 400);

        return () => clearTimeout(delay);
    }, [searchInput]);

    return (
        <form className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 shadow-sm hover:bg-gray-200 transition">
          <img src={searchIcon} alt="search" className="w-4 h-4 opacity-60" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 w-40 sm:w-56"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
    )
}

export default SearchInput;