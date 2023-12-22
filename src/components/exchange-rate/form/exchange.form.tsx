import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed } from 'yup';
import Form from '@/components/forms/from';
import { ControllerInput, ExchangeRateInput } from '@/components/forms/inputs';
import { EditIcon } from '@/icons';
import { Button } from '@/components/common';
import useSWRMutation from 'swr/mutation';
import { updateExchangeRate } from '@/services/order.service';
import { SnackbarUtilities } from '@/utilities';

const ExchangeRateForm: React.FC<{
  exchangeRate: number;
  edit: boolean;
  changeExchangeRate: (data: any) => void;
}> = ({ exchangeRate, edit, changeExchangeRate }) => {
  const validationSchema = Object({
    exchangeRate: number(),
    // dolars: number(),
    // total: number(),
  });
  const defaultValues = {
    exchangeRate,
  };
  const { trigger, isMutating } = useSWRMutation('/tasas', updateExchangeRate)

  const onSubmit = async (data: any) => {
    const res = await trigger(data)
    if (!!res.data) {
      SnackbarUtilities.success('Tasa actualizada');
      //setEdit(false);
    }
    if (res.code === 401) {
      SnackbarUtilities.error('No tienes permisos para realizar esta acción');
    }
  }

  const resolver = yupResolver(validationSchema);

  return (
    <Form
      className="flex p-2 flex-col items-center justify-center"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={resolver}
    >
      <ControllerInput
        type='number'
        startIcon={<p className="flex font-bold text-gray-300">BS</p>}
        endIcon={<EditIcon />}
        name="exchangeRate"
      />
      <h2 className="flex font-bold text-primary-300 text-lg">Medidor</h2>
      <button type='submit'>Send</button>
      <ExchangeRateInput edit={edit} name="exchangeRate" />
    </Form>
  );
};

export default ExchangeRateForm;
