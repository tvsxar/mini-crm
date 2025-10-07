import { useContext } from 'react';

import searchIcon from '../assets/search-outline.svg';

// Components
import SortDropdown from './SortDropdown';
import CustomersContext from '../context/CustomersContext';

function TopBar() {
  const { modalState, setModalState, sortOrder, setSortOrder } = useContext(CustomersContext);

    function handleAddNew() {
      setModalState({
        ...modalState,
        isOpen: true,
        mode: 'add'
      });
    }

  return (
    <div className="bg-white rounded-2xl p-4 max-w-6xl mx-auto mt-6 mb-4 shadow-sm">
      <div className="flex gap-x-1 items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">All Customers</h1>

        <form className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 shadow-sm hover:bg-gray-200 transition">
          <img src={searchIcon} alt="search" className="w-4 h-4 opacity-60" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500 w-40 sm:w-56"
          />
        </form>

        <div className="flex items-center gap-4">
            <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <button className="bg-gray-100 text-black text-sm font-medium px-4 
            py-2 rounded-xl cursor-pointer hover:bg-gray-200 shadow-sm"
            onClick={() => handleAddNew()}>Add New</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;