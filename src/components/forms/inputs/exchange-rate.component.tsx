import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { EditIcon } from '@/icons';
import Decimal from 'decimal.js-light'
import { Button } from '@/components/common';
import useSWRMutation from 'swr/mutation';
import { updateExchangeRate } from '@/services/order.service';
import { SnackbarUtilities } from '@/utilities';
const ExchangeRateInput: React.FC<{
  name: string;
  edit: boolean;
}> = ({ name, edit }) => {
  const { watch } = useFormContext();
  const exchangeRate = watch<string>(name);
  const [value, setValue] = useState('0');
  const [total, seTotal] = useState('0');
  const { trigger, isMutating } = useSWRMutation('/tasas/', updateExchangeRate)

  const onSubmit = async () => {
    const res = await trigger({ amount: Number(exchangeRate) })
    if (!!res.data) {
      SnackbarUtilities.success('Tasa actualizada correctamente');
    }
  }


  return (
    <div className='flex flex-col w-full'>
      <label className='flex font-bold' htmlFor={name}>Dolar</label>
      <div className='flex h-14 p-2 items-center border-2 border-primary-300 bg-white rounded-lg w-full'>
        <span className='flex font-bold text-gray-300'>$</span>
        <NumericFormat
          className="flex input_number  w-full appearance-none  border-none bg-transparent focus:outline-none "
          name={'dolars'}
          id={'dolars'}
          value={value}
          onValueChange={(values) => {
            setValue(values.value);
            seTotal(new Decimal(Number(values.value)).mul(exchangeRate).toString())
          }}
          thousandSeparator
        />
        <EditIcon />
      </div>
      <label className='flex font-bold' htmlFor={name}>Bolivares</label>
      <div className='flex h-14 items-center p-2 border-2 border-primary-300 bg-white rounded-lg w-full'>
        <span className='flex font-bold text-gray-300'>BS</span>
        <NumericFormat
          disabled
          name='total'
          className="flex input_number  w-full appearance-none  border-none bg-transparent focus:outline-none "
          value={total}
        />
      </div>
      <div>
        {edit && < Button className='mt-4' onClick={onSubmit} >Submit</Button>}
      </div>
    </div >
  );
};

export default ExchangeRateInput;
