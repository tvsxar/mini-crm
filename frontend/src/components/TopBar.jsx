import { useContext } from 'react';

// Components
import SortDropdown from './SortDropdown';
import CustomersContext from '../context/CustomersContext';
import SearchInput from './SearchInput';

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

        <SearchInput />

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