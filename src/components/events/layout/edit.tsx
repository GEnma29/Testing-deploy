import React from 'react'
import { HeaderDashboard } from '@/components/dashboard/header'
import { Header } from '@/components/common'
import { EventsForm } from '../forms'
import { HeaderType } from '@/components/common/layout/header'
import { useParams, useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '@/models'
import useSWR from 'swr'
import { eventsFetcher } from '@/services'


const EditEventLayout = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();

    const { data, isLoading } = useSWR(`/events/${eventId}`, eventsFetcher)
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true })
    }
    return (
        <HeaderDashboard children={
            <div className='flex w-full h-full flex-col'>
                <Header type={HeaderType.EDIT} textRight={'Editar'} actionRight={() => gotTo(`${PrivateRoutes.NEW_EVENT}`)} actionLeft={() => gotTo(PrivateRoutes.EVENTS)} textLeft='Regresar' title='Evento' />
                {isLoading && <p>Loading...</p>}
                {data && <EventsForm name={data.data.name} description={data.data.description} position={data.data.position} enabled={data.data.active} image={data.data.image} />}
            </div>
        } />
    )
}

export default EditEventLayout