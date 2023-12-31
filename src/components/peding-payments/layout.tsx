import React from 'react'
import { HeaderDashboard } from '../dashboard/header'
import { Header } from '../common'
import { HeaderType } from '../common/layout/header'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/models'
import TablePendingPayment from './table'

const PedingPaymentLayout = () => {
    const navigate = useNavigate();
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true });
    };
    return (
        <HeaderDashboard
            children={
                <div className="flex w-full items-center justify-center h-full flex-col">
                    <Header
                        type={HeaderType.EDIT}
                        textRight={'Editar'}
                        actionRight={() => { }}
                        actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
                        textLeft="Regresar"
                        title="Pagos pendientes"
                    />
                    <TablePendingPayment />
                </div>
            }
        />
    )
}

export default PedingPaymentLayout