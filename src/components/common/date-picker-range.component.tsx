"use client"

import * as React from "react"
import dayjs from "dayjs"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
    Button,
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/common"

import { cn } from "@/utilities"

export function DatePickerWithRange({
    className,
    date,
    setDate,


}: React.HTMLAttributes<HTMLDivElement> & { date: DateRange | undefined, setDate: (date: any) => void }) {


    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[300px] flex justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >

                        {date?.from ? (
                            date.to ? (
                                <>
                                    {dayjs(date.from).format("DD/MM/YYYY")} -{" "}
                                    {dayjs(date.to).format("DD/MM/YYYY")}
                                </>
                            ) : (
                                dayjs(date.from).format("DD/MM/YYYY")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="flex ml-2 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        className="bg-white"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
