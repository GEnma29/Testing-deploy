import React from 'react';
import {
  useForm,
  SubmitHandler,
  DeepPartial,
  FieldValues,
  DefaultValues,
  Resolver,
  FormProvider,
} from 'react-hook-form';
import { cn } from '@/utilities';
interface FormProps<T extends FieldValues> {
  defaultValues: DeepPartial<T> | DefaultValues<T> | any;
  resolver: Resolver<T>;
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  className?: string;
}
export default function Form<T extends FieldValues>({
  defaultValues,
  resolver,
  children,
  onSubmit,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({ defaultValues, resolver, mode: 'onChange' });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form className={cn(className)} onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    // register: methods.register,
                    control: methods.control,
                    key: child.props.name,
                  },
                })
              : child;
          }

          return null;
        })}
      </form>
    </FormProvider>
  );
}
