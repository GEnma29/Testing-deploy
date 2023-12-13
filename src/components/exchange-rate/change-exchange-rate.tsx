import React, { useEffect } from 'react';
import { HeaderDashboard } from '../dashboard/header';
import { Header } from '@/components/common';
import { HeaderType } from '../common/layout/header';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';
import ExchangeRateForm from './form/exchange.form';

const ChangeExchangeRate = () => {
  const navigate = useNavigate();
  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };
  return (
    <HeaderDashboard
      children={
        <div className="flex w-full items-center justify-center h-full flex-col">
          <Header
            type={HeaderType.EDIT}
            textRight={'Editar'}
            actionRight={() => {}}
            actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
            textLeft="Regresar"
            title="Tasa"
          />
          <div className="flex w-full lg:w-[26rem] flex-col">
            <ExchangeRateForm exchangeRate={0} />
          </div>
        </div>
      }
    />
  );
};

export default ChangeExchangeRate;
