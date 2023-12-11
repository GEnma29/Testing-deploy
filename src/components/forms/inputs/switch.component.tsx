"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/utilities"
import { Control, Controller, FieldValues, useFormContext } from "react-hook-form"
import { boolean } from "yup"

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    name: string;

}

const SwitchWrapper: React.FC<SwitchProps> = ({ name, ...props }) => {
    const { control } = useFormContext();
    return <Switch {...props} name={name} control={control} />;
};

export const Switch: React.ForwardRefRenderFunction<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps & { control: any }> = (
    { className, name, control, defaultValue, ...props },
    ref
) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <div className="flex items-center">
                    <SwitchPrimitives.Root
                        className={cn(
                            field.value ? 'peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-primary-300 bg-primary-300' :
                                "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-primary-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-input",
                            className
                        )}
                        {...field}
                        onCheckedChange={field.onChange}
                        {...props}
                    >
                        <SwitchPrimitives.Thumb
                            className={cn(
                                field.value ? 'pointer-events-none bg-background-200 block h-7 w-7 rounded-full shadow-lg ring-0 transition-transform  translate-x-6' :
                                    "pointer-events-none block h-7 w-7 rounded-full shadow-lg ring-0 transition-transform bg-primary-300 "

                            )}
                        />
                    </SwitchPrimitives.Root>
                    {<p className="flex ml-2 "> {field.value ? 'Habilitado' : 'Deshabilitado'}</p>}
                </div>

            )}
        />
    )

}

Switch.displayName = 'Switch';

export default SwitchWrapper;
