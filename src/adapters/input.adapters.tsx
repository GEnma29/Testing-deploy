import { cn } from '@/utilities';
import React from 'react';
import { ControllerFieldState } from 'react-hook-form';

interface InputStyleAdapterProps {
  label?: React.ReactNode;
  fieldState: ControllerFieldState;
  input: React.ReactNode;
  className?: string;
}

export const InputStyleAdapter: React.FC<InputStyleAdapterProps> = ({
  fieldState,
  input,
  label,
  className,
}) => {
  const styles = {
    normal: 'border-gray-400',
    isTouched: 'border-primary-300',
    error: 'border-error-500',
  };
  let style = styles.normal;
  if (fieldState !== undefined) {
    const { isDirty, invalid, error } = fieldState;
    if (error) {
      style = styles.error;
    }
    if (isDirty) {
      style = styles.isTouched;
    }
    if (invalid) {
      style = styles.error;
    }
  }
  return (
    <div className="flex my-2 flex-col w-full">
      {label ?? label}
      <div
        className={cn(`flex bg-white p-3 h-14 border-solid border-2 rounded-lg ${style} `, className)}
      >
        {input}
      </div>
      {fieldState.error && (
        <span className="flex ml-5 text-error-500">
          {fieldState?.error?.message}
        </span>
      )}
    </div>
  );
};
