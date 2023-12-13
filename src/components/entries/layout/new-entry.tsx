import React from 'react';
import { Header } from '@/components/common';
import { HeaderType } from '@/components/common/layout/header';
import { HeaderDashboard } from '@/components/dashboard/header';
import { PrivateRoutes } from '@/models';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { entriesFetcher, createEntry } from '@/services/entries.service';
import EntryForm from '../forms/entry.from';
import { SnackbarUtilities } from '@/utilities';

const NewEntry = () => {
  useSWRMutation;
  const navigate = useNavigate();
  const { eventId } = useParams();

  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };

  const { data, isLoading, error } = useSWR(
    `/events/entries/?event_id=${eventId}`,
    entriesFetcher,
  );
  const { trigger, isMutating } = useSWRMutation(
    `/events/entries`,
    createEntry,
  );
  const onSubmit = async (data: any) => {
    console.log('dataForm', data);
    const res = await trigger(data);
    if (res.status === 201) {
      SnackbarUtilities.success('Entrada creada correctamente');
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
            actionRight={() => {}}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Entrada"
          />
          <EntryForm
            name=""
            label=""
            price={0}
            index={0}
            seats_per_table={1}
            color=""
            max_entries={10}
            type="per_seat"
            active={true}
            full_table={false}
            sendData={onSubmit}
          />
        </div>
      }
    />
  );
};

export default NewEntry;
