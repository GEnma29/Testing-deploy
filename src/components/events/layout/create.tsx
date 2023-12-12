import React from 'react';
import { Header } from '../../common';
import { HeaderType } from '../../common/layout/header';
import { HeaderDashboard } from '../../dashboard/header'
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models';
import { EventsForm } from '../forms';
import useSWRMutation from 'swr/mutation';
import { createEvent, createEventSWR } from '@/services/events.service';


type Event = {
    name: string;
    description: string;
    position: number;
    active: boolean;
    image: any;
}
const CreateLayout: React.FC = () => {
    const navigate = useNavigate()
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true })
    }
    //const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;
    // const { data, trigger } = useSWRMutation('/', CreateEvent)
    const onSubmit = async (data: FormData) => {
        const res = await createEvent(data)
        if (res.status === 201) {
            navigate(`${PrivateRoutes.EVENTS}`, { replace: true })
        }
        if (res.status === 401) {
            localStorage.removeItem('access_token')
            navigate(`/private/${PrivateRoutes.EVENTS}`, { replace: false })

        }

    }
    return (
        <HeaderDashboard children={
            <div className='flex w-full h-full flex-col'>
                <Header
                    type={HeaderType.EDIT}
                    textRight={'Editar'}
                    actionRight={() => gotTo(`${PrivateRoutes.NEW_EVENT}`)}
                    actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
                    textLeft='Regresar'
                    title='Evento' />
                <EventsForm
                    sendData={onSubmit}
                    name=''
                    description=''
                    position={10}
                    enabled={false}
                    image=''
                />
            </div>
        } />
    )
}

export default CreateLayout;