import React, { useEffect, useState } from 'react';
import { HeaderDashboard } from '../dashboard/header';
import { Header } from '@/components/common';
import { HeaderType } from '../common/layout/header';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import ExchangeRateForm from './form/exchange.form';
import useSWR from 'swr';
import { ordersFetcher } from '@/services';
import { adapterExchangeRate } from '@/adapters/adapter.amount';

const ChangeExchangeRate = () => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState<boolean>(false)
  const handelEdit = () => {
    setEdit((prev) => !prev)
  }

  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };
  const { data, isLoading } = useSWR('/tasas/endid', ordersFetcher)

  //console.log(data?.data)
  const amount = adapterExchangeRate(data?.data || [])
  //console.log('data', data?.data[0].amount)

  return (
    <HeaderDashboard
      children={
        <div className="flex w-full items-center justify-center h-full flex-col">
          <Header
            type={HeaderType.EDIT}
            textRight={edit ? 'Guardar' : 'Editar'}
            actionRight={handelEdit}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Tasa"
          />
          <div className="flex w-full lg:w-[26rem] flex-col">
            {isLoading ? <p>Loading</p> : <ExchangeRateForm exchangeRate={data?.data[0].amount} edit={edit} />}
          </div>
        </div>
      }
    />
  );
};

export default ChangeExchangeRate;
