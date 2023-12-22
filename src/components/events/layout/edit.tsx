import React from 'react';
import { HeaderDashboard } from '@/components/dashboard/header';
import { Button, Header } from '@/components/common';
import { EventsForm } from '../forms';
import { HeaderType } from '@/components/common/layout/header';
import { useParams, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import useSWR from 'swr';
import { eventsFetcher, updateEvent } from '@/services';
import useSWRMutation from 'swr/mutation';
import { SnackbarUtilities } from '@/utilities';
import { TicketIcon } from '@/icons';

const EditEventLayout = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const { data, isLoading } = useSWR(`/events/${eventId}`, eventsFetcher);
  const { trigger, isMutating } = useSWRMutation(
    `/events/${eventId}`,
    updateEvent,
  );

  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };
  const onSubmit = async (data: FormData) => {
    // const res = await updateEvent(`${eventId}`, data)
    const res = await trigger(data);

    if (res.status === 401) {
      localStorage.removeItem('access_token');
      navigate(`/private/${PrivateRoutes.EVENTS}`, { replace: false });
    }
    if (res.status === 201) {
      SnackbarUtilities.success('Evento actualizado');
      gotTo(PrivateRoutes.EVENTS);
    }
  };
  return (
    <HeaderDashboard
      children={
        <div className="flex w-full h-full flex-col">
          <Header
            className="lg:mb-8"
            type={HeaderType.EDIT}
            //textRight={'Editar'}
            actionRight={() => console.log('nothing')}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Evento"
          />
          {isLoading && <p>Loading...</p>}
          {data && (
            <EventsForm
              sendData={onSubmit}
              name={data.data.name}
              description={data.data.description}
              position={data.data.position}
              enabled={data.data.active}
              image={data.data.image}
              isLoading={isMutating}
              children={
                <div className="flex mt-3 lg:ml-8 w-full lg:w-[24rem]">
                  <Button
                    type="button"
                    onClick={() => gotTo(`${PrivateRoutes.ENTRIES}/${eventId}`)}
                    variant="secondary"
                  >
                    Entradas <TicketIcon className="flex ml-2" />
                  </Button>
                </div>
              }
            />
          )}
        </div>
      }
    />
  );
};

export default EditEventLayout;
