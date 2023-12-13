import React from 'react';
import { Controller, FieldValues, Control } from 'react-hook-form';

type OptionType = {
  label: string;
  value: string | number;
};
const Select: React.FC<{
  options: OptionType[];
  name: string;
  control?: Control<FieldValues>;
  rules?: any;
}> = ({ options, name, rules, control, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <select
            className=" rounded-lg border-primary-300 border-2  h-14  bg-white  w-full"
            {...field}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    />
  );
};

export default Select;
