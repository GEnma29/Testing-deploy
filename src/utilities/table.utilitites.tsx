import type { FC } from "react";
import { Badge } from "@/components/common/badge.component"
import { CompletedIcon, PedingIcon } from "@/icons";
import CancelledIcon from "@/icons/cancelled";



export enum PaymentStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    REJECTED = 'rejected',
    CANCELLED = 'cancelled',
}

type State = "pending" | "cancelled" | "completed" | "rejected";
export const adapterBadged = ({ state = 'pending' }: { state: State }) => {
    const BadgeState = (
        {
            pending: () => <Badge variant='pending' title="Pendiente" />,
            rejected: () => <Badge variant='reject' title="Denegado" />,
            cancelled: () => <Badge variant='cancelled' title="Cancelado" />,
            completed: () => <Badge variant='completed' title="Aprobado" />,
            default: () => <Badge variant='pending' title="Pendiente" />,
        } as Record<State, FC>
    )[state] || <Badge variant='pending' title="Pendiente" />;
    return <BadgeState />;

}

export const stautsUtilities = ({ state = 'pending' }: { state: State }) => {
    const PaymentStatus = (
        {
            pending: () => <PedingIcon />,
            rejected: () => <CancelledIcon />,
            cancelled: () => <CancelledIcon />,
            completed: () => <CompletedIcon />,
            default: () => <PedingIcon />,
        } as Record<State, FC>
    )[state] || <PedingIcon />;

    return <PaymentStatus />
}