import React from 'react'
import { cn } from '@/utilities'
import { EditIcon } from '@/icons'

const ExchangeRateFilter: React.FC<{
    className?: string,
}> = ({ className }) => {
    return (
        <div className={cn('flex items-center w-full bg-white p-2 h-12 border-solid border-2 rounded-lg border-primary-300', className)}>
            <span className="text-lg font-blod text-gray-300">$</span>
            <input disabled className="flex appearance-none input after:bg-white  border-0 focus:ring-0  bg-white focus:outline-none w-full h-full" />
            <EditIcon />
        </div>
    )
}

export default ExchangeRateFilter