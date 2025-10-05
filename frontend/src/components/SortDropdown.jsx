import { useState } from 'react';

import arrowIcon from '../assets/chevron-down-outline.svg';

function SortDropdown({sortOrder, setSortOrder}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (sort) => {
        setSortOrder(sort);
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl 
            hover:bg-gray-200 transition shadow-sm cursor-pointer" onClick={() => setIsOpen(!isOpen)}>

                <span className="text-xs text-gray-700">Sort by:</span>
                <span className="font-medium text-sm text-gray-900">{sortOrder === "desc" ? "Newest" : "Oldest"}</span>
                <img src={arrowIcon} alt="arrow" className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />

            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <button className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100  cursor-pointer
                        ${sortOrder === "desc" ? "font-semibold text-gray-900" : "text-gray-700"}`}
                        onClick={() => { toggleDropdown("desc") }}>
                            Newest
                    </button>

                    <button className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer
                        ${sortOrder === "asc" ? "font-semibold text-gray-900" : "text-gray-700"}`}
                        onClick={() => { toggleDropdown("asc") }}>
                            Oldest
                    </button>
                </div>
            )}
        </div>

    )
}

export default SortDropdown;