import React from 'react';
import { useFormContext } from 'react-hook-form';

const ExchangeRateInput: React.FC<{
  name: string;
}> = ({ name }) => {
  const { watch } = useFormContext();
  const exchangeRate = watch(name);
  return (
    <input
      disabled
      className=""
      pattern="([0-9]{1,3}).([0-9]{1,3})"
      value={exchangeRate}
    />
  );
};

export default ExchangeRateInput;
