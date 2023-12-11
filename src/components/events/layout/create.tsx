import React from 'react';
import { Header } from '../../common';
import { HeaderType } from '../../common/layout/header';
import { HeaderDashboard } from '../../dashboard/header'
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models';
import { EventsForm } from '../forms';

const CreateLayout: React.FC = () => {
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

export default CreateLayout;