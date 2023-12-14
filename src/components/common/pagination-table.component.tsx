import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"

const options = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
    { value: 50, label: '50' },
]
const PaginationTable: React.FC<{
    currentPage: number,
    totalPages: number,
    nextPage: () => void,
    prevPage: () => void,
    limit: number,
    setLimit: (limit: number) => void,
}> = ({ currentPage, totalPages, nextPage, prevPage, limit, setLimit }) => {
    return (
        <nav
            className="flex w-full justify-end lg: px-4 py-3 sm:px-6"
            aria-label="Pagination"
        >
            <div className="flex w-full lg:w-[26.563rem]  items-center justify-around">
                <p className=" text-sm text-gray-700">
                    Filas por página
                </p>
                <select
                    className="flex w-18 h-12 rounded-lg border-primary-300 border-2   bg-white "
                    value={limit}
                    onChange={(e) => setLimit(parseInt(e.target.value))}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <p className='hidden lg:visible'>
                    {currentPage} -  de {totalPages}
                </p>
                <div className='flex items-center'>
                    <ChevronLeft onClick={prevPage} className='cursor-pointer' />
                    <ChevronRight onClick={nextPage} className='cursor-pointer' />

                </div>
            </div>


        </nav>
    )
}

export default PaginationTable