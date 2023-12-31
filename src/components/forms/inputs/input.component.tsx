import { InputHTMLAttributes, useState, RefObject, useEffect } from 'react';
import {
  Controller,
  FieldValues,
  Control,
  UseFormRegister,
} from 'react-hook-form';
import { InputStyleAdapter } from '../../../adapters/input.adapters';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NumericFormat } from 'react-number-format';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  name: string;
}

interface InputControllerProps extends InputHTMLAttributes<HTMLInputElement> {
  control?: Control<FieldValues>;
  name: string;
  rules?: any;
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export function Input({ register, name, ...rest }: InputProps) {
  return <input {...register(name)} {...rest} />;
}

export function InputCustom(props: InputProps) {
  return (
    <input
      {...props}
      className="flex appearance-none input after:bg-white  border-0 focus:ring-0  bg-white focus:outline-none w-full h-full"
    />
  );
}
export function ControllerInput({
  control,
  name,
  rules,
  startIcon,
  endIcon,
  label,
  ...rest
}: InputControllerProps) {
  const [typeInput, setTypeInput] = useState(rest.type);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputStyleAdapter
          label={label}
          fieldState={fieldState}
          input={
            <div className="flex items-center h-full w-full">
              {startIcon ?? startIcon}

              {typeInput === 'number' ? (
                <NumericFormat
                  className="flex input_number  w-full appearance-none  border-none bg-transparent focus:outline-none "
                  value={field.value}
                  onChange={field.onChange}
                  allowLeadingZeros
                  thousandSeparator=","
                />
              ) : (
                <input
                  className="flex appearance-none input after:bg-white  border-0 focus:ring-0  bg-white focus:outline-none w-full h-full"
                  {...field}
                  {...rest}
                  type={typeInput}
                />
              )}
              {endIcon ?? endIcon}
              {rest.type === 'password' ? (
                typeInput === 'password' ? (
                  <FaEyeSlash onClick={() => setTypeInput('text')} />
                ) : (
                  <FaEye onClick={() => setTypeInput('password')} />
                )
              ) : null}
            </div>
          }
        />
      )}
    />
  );
}
