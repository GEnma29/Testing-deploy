import dayjs from "dayjs"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/utilities"
import { Calendar, Button, Popover, PopoverContent, PopoverTrigger } from "@/components/common"
import { Controller, FieldValues, Control } from 'react-hook-form';


const DatePickerWrap: React.FC<{
    name: string;
    control?: Control<FieldValues>;
    rules?: any;
}> = ({ name, rules, control, ...rest }) => {

    return <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => {
            return (
                <Popover>
                    <PopoverTrigger >
                        <div
                            //variant={"outline"}
                            className={cn(
                                "w-[280px]  justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                            )}
                        >
                            {field.value ? dayjs(field.value.toString()).format("PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="mr-2 h-4 w-4" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            )
        }}
    />
}

export default DatePickerWrap