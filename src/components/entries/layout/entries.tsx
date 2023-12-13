import React from 'react';
import { Header } from '@/components/common';
import { HeaderType } from '@/components/common/layout/header';
import { HeaderDashboard } from '@/components/dashboard/header';
import { PrivateRoutes } from '@/models';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import { entriesFetcher } from '@/services/entries.service';
import Entry from '../entries.component';

const Entries = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };

  const { data, isLoading, error } = useSWR(
    `events/entries/?event_id=${eventId}`,
    entriesFetcher,
  );

  return (
    <HeaderDashboard
      children={
        <div className="flex w-full h-full flex-col">
          <Header
            type={HeaderType.EDIT}
            textRight={'Añadir Entrada'}
            actionRight={() => gotTo(`${PrivateRoutes.NEW_ENTRY}/${eventId}`)}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Entradas"
          />
          {isLoading && <p>loading...</p>}
          <div className="my-8 px-4 h-full grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2 lg:px-4">
            {data &&
              !isLoading &&
              !error &&
              data.data.map((entry: any) => {
                return (
                  <Entry
                    eventId={eventId || ''}
                    key={entry.id}
                    name={entry.name}
                    id={entry.id}
                    type={entry.type}
                  />
                );
              })}
          </div>
        </div>
      }
    />
  );
};

export default Entries;
