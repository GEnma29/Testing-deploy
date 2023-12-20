import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utilities"

const badgeVariants = cva(
    "flex  items-center justify-center rounded-md  text-xs font-extrabold text-gray-600 ring-1 ring-inset ring-gray-500/10",
    {
        variants: {
            variant: {
                pending: "bg-[#FFECA0] text-[#605116]",
                completed: "bg-[#BDFFA0] text-[#2D6415]",
                reject: "bg-[#FFA6A1] text-[#703B16]",
                cancelled: "bg-[#FFA6A1] text-[#703B16]",

            },
            size: {
                default: "h-8 w-20 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: 'pending',
            size: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
    asChild?: boolean
    className?: string
    title?: string
}

const Badge = React.forwardRef<HTMLButtonElement, BadgeProps>(
    ({ className, variant, size, title, asChild = false, ...props }, ref) => {
        return (
            <div
                className={cn(badgeVariants({ variant, size, className }))}
                {...props}
            >{title}</div>
        )
    }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
