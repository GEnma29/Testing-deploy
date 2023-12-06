import { InputHTMLAttributes, useState } from "react";
import { Controller, FieldValues, Control, UseFormRegister, } from "react-hook-form";
import { InputStyleAdapter } from "../../../adapters/input.adapters";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FieldValues>;
    name: string;
}


interface InputControllerProps extends InputHTMLAttributes<HTMLInputElement> {
    control?: Control<FieldValues>;
    name: string;
    rules?: any,
    label?: React.ReactNode,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,

}

export function Input({ register, name, ...rest }: InputProps) {
    return <input {...register(name)} {...rest} />;
}

export function ControllerInput({ control, name, rules, startIcon, endIcon, label, ...rest }: InputControllerProps) {

    const [typeInput, setTypeInput] = useState(rest.type)
    return <Controller
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
                        <input className="flex  bg-transparent w-full h-full hover:outline-none  hover:bg-transparent focus:bg-transparent focus:outline-none" {...field} {...rest} type={typeInput} />
                        {endIcon ?? endIcon}
                        {rest.type === "password" ? typeInput === 'password' ? <FaEyeSlash onClick={() => setTypeInput('text')} /> : <FaEye onClick={() => setTypeInput('password')} /> : null}
                    </div >

                }

            />
        )
        }
    />

}