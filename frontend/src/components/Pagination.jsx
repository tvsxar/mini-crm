import { useContext } from 'react';
import CustomersContext from '../context/CustomersContext';

import arrowLeft from '../assets/chevron-back-outline.svg';
import arrowRight from '../assets/chevron-forward-outline.svg';

function Pagination() {
    const { currentPage, setCurrentPage, totalPages } = useContext(CustomersContext);

    function goToPreviousPage() {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    function goToNextPage() {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    function handlePageClick(page) {
        setCurrentPage(page);
    }

    return (
        <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
                <button onClick={() => goToPreviousPage()} className="px-1.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                  <img src={arrowLeft} alt="left" className='w-4 h-4' />
                </button>
      
                <div className="flex gap-1">
                    {
                        [...Array(totalPages).keys()].map(i => (
                            <button onClick={() => handlePageClick(i+1)} key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${currentPage === i + 1 ? 'bg-black text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} cursor-pointer`}>
                                {i + 1}
                            </button>
                        ))
                    }
                </div>

                <button onClick={() => goToNextPage()} className="px-1.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                    <img src={arrowRight} alt="left" className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}

export default Pagination;