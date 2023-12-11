import * as React from "react"
import { Controller, FieldValues, Control, UseFormRegister, } from "react-hook-form";

import { cn } from "../../../utilities/tailwind.utilities"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    control?: Control<FieldValues>;
    name: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, control, name, ...props }, ref) => {
        return (
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => (
                    <textarea
                        rows={props.rows ? props.rows : 6}
                        className={cn(
                            "flex min-h-[80px] resize-none w-full rounded-md  border-2 border-primary-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            className
                        )}
                        {...field}
                        {...props}
                    />
                )}

            />
        )
    }
)
Textarea.displayName = "Textarea"

export { Textarea }
