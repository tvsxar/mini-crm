import arrowLeft from '../assets/chevron-back-outline.svg';
import arrowRight from '../assets/chevron-forward-outline.svg';

function Pagination() {
    return (
        <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
                <button className="px-1.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                  <img src={arrowLeft} alt="left" className='w-4 h-4' />
                </button>
      
                <div className="flex gap-1">
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer">
                        1
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-black text-white font-medium shadow-sm cursor-pointer">
                        2
                    </button>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 cursor-pointer">
                        3
                    </button> 
                </div>

                <button className="px-1.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer">
                    <img src={arrowRight} alt="left" className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}

export default Pagination;