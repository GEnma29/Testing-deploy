import React from 'react';
import { HeaderDashboard } from '@/components/dashboard/header';
import { Header } from '@/components/common';
import { HeaderType } from '@/components/common/layout/header';
import { PrivateRoutes } from '@/models';
import { useNavigate, useParams } from 'react-router-dom';
import EntryForm from '../forms/entry.from';
import useSWR from 'swr';
import { entriesFetcher, updateEntry } from '@/services/entries.service';
import useSWRMutation from 'swr/mutation';
import { SnackbarUtilities } from '@/utilities';

const EditEntry = () => {
  const { eventId, entryId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSWR(
    `/events/entries/${entryId}`,
    entriesFetcher,
  );
  const { trigger, isMutating } = useSWRMutation(
    `/events/entries/${entryId}`,
    updateEntry,
  );
  // console.log(data);

  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };
  const onSubmit = async (data: any) => {
    const res = await trigger(data);
    if (res.status === 201) {
      SnackbarUtilities.success('Entrada editada correctamente');
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
            textRight={'Editar'}
            actionRight={() => { }}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Entrada"
          />
          {data && !isLoading && !error && (
            <EntryForm
              name={data.data.name}
              label={data.data.label}
              price={data.data.price}
              seats_per_table={data.data.seats_per_table}
              color={data.data.properties.color || '#7aa6ad'}
              max_entries={data.data.max_entries || 10}
              type={data.data.type}
              active={data.data.active}
              full_table={data.data.full_table}
              index={data.data.properties.start_index}
              sendData={onSubmit}
            />
          )}
        </div>
      }
    />
  );
};

export default EditEntry;
