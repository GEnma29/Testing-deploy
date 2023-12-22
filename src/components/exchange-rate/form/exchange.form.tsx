import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { boolean, object, string, number, mixed } from 'yup';
import Form from '@/components/forms/from';
import { ControllerInput, ExchangeRateInput } from '@/components/forms/inputs';
import { EditIcon } from '@/icons';
import { Button } from '@/components/common';

const ExchangeRateForm: React.FC<{
  exchangeRate: number;
  edit: boolean;
}> = ({ exchangeRate, edit }) => {
  const validationSchema = Object({
    exchangeRate: number().required('Exchange rate is required'),
  });
  const defaultValues = {
    exchangeRate,
  };
  const resolver = yupResolver(validationSchema);
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form
      className="flex p-2 flex-col items-center justify-center"
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      resolver={resolver}
    >
      <ControllerInput
        type="number"
        startIcon={<p className="flex font-bold text-gray-300">BS</p>}
        endIcon={<EditIcon />}
        name="exchangeRate"
      />
      <h2 className="flex font-bold text-primary-300 text-lg">Medidor</h2>
      <ExchangeRateInput name="exchangeRate" />
      {edit && <Button className='mt-4' type='submit'>Submit</Button>}
    </Form>
  );
};

export default ExchangeRateForm;
