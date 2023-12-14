import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';
import { EditIcon } from '@/icons';
import Decimal from 'decimal.js-light'
const ExchangeRateInput: React.FC<{
  name: string;
}> = ({ name }) => {
  const { watch } = useFormContext();
  const exchangeRate = watch(name);
  const [value, setValue] = useState('0');
  const [total, seTotal] = useState('0');


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
          className="flex input_number  w-full appearance-none  border-none bg-transparent focus:outline-none "
          value={total}
        />
      </div>
    </div>
  );
};

export default ExchangeRateInput;
