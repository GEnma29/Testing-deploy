import React from 'react';
import { Header } from '../../common';
import { HeaderType } from '../../common/layout/header';
import { HeaderDashboard } from '../../dashboard/header';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../../models';
import { EventsForm } from '../forms';
import useSWRMutation from 'swr/mutation';
import { createEvent, createEventSWR } from '@/services/events.service';
import { SnackbarUtilities } from '@/utilities';

type Event = {
  name: string;
  description: string;
  position: number;
  active: boolean;
  image: any;
};
const CreateLayout: React.FC = () => {
  const navigate = useNavigate();
  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };
  //const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;
  const { trigger, isMutating } = useSWRMutation('/events', createEvent);
  const onSubmit = async (data: FormData) => {
    const res = await trigger(data);
    if (res.status === 201) {
      SnackbarUtilities.success('Evento creado');
      gotTo(PrivateRoutes.EVENTS);
    }
    if (res.status === 401) {
      localStorage.removeItem('access_token');
    }
  };
  return (
    <HeaderDashboard
      children={
        <div className="flex w-full h-full flex-col">
          <Header
            type={HeaderType.EDIT}
            // textRight={'Editar'}
            actionRight={() => gotTo(`${PrivateRoutes.NEW_EVENT}`)}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Evento"
          />
          <EventsForm
            sendData={onSubmit}
            name=""
            description=""
            position={10}
            enabled={false}
            image=""
            isLoading={isMutating}
          />
        </div>
      }
    />
  );
};

export default CreateLayout;
