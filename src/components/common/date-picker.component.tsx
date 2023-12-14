import * as React from "react"
import dayjs from "dayjs"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/utilities"
import { Calendar, Button, Popover, PopoverContent, PopoverTrigger } from "@/components/common"


export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger >
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px]  justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    {date ? dayjs(date).format("PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
