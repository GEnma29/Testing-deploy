import React from "react"
import { useForm, SubmitHandler, DeepPartial, FieldValues, DefaultValues, Resolver, } from "react-hook-form"

interface FormProps<T extends FieldValues> {
    defaultValues: DeepPartial<T> | DefaultValues<T> | any;
    resolver: Resolver<T>;
    children: React.ReactNode;
    onSubmit: SubmitHandler<T>;
}
export default function Form<T extends FieldValues>({ defaultValues, resolver, children, onSubmit }: FormProps<T>) {
    const methods = useForm<T>({ defaultValues, resolver })
    const { handleSubmit } = methods


    return (
        <form className="flex flex-col w-full h-full" onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return child.props.name
                        ? React.createElement(child.type, {
                            ...{
                                ...child.props,
                                //register: methods.register,
                                control: methods.control,
                                key: child.props.name,
                            },
                        })
                        : child;
                }

                return null;
            })}
        </form>
    )
}