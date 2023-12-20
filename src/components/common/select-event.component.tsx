import React from 'react'
import { adapterEvents } from '@/adapters/adapter.events'
import { eventsFetcher } from '@/services'
import { cn } from '@/utilities'
import useSWR from 'swr'


const SelectEventComponent: React.FC<{ event: string, setEvent: (event: string) => void, className?: string }> = ({ event, setEvent, className }) => {
    const { data, error, isLoading } = useSWR(
        '/events?sort=position&active=true&entries=true',
        eventsFetcher,
    );
    const options = adapterEvents(data?.data || [])
    return (
        <div className={cn('flex', className)} >
            {isLoading ?
                <p>Loading..</p> :
                <select
                    className="flex w-18 h-12 rounded-lg border-primary-300 border-2   bg-white "
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            }
        </div>
    )
}

export default SelectEventComponent