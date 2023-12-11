import React from 'react'
import { HeaderDashboard } from '@/components/dashboard/header'
import { Header } from '@/components/common'
import { EventsForm } from '../forms'
import { HeaderType } from '@/components/common/layout/header'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/models'


const EditEventLayout = () => {

    const navigate = useNavigate()
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true })
    }
    return (
        <HeaderDashboard children={
            <div className='flex w-full h-full flex-col'>
                <Header type={HeaderType.EDIT} textRight={'Editar'} actionRight={() => gotTo(`${PrivateRoutes.NEW_EVENT}`)} actionLeft={() => gotTo(PrivateRoutes.EVENTS)} textLeft='Regresar' title='Evento' />
                <EventsForm name='' description='' position={10} enabled={false} image='' />
            </div>
        } />
    )
}

export default EditEventLayout