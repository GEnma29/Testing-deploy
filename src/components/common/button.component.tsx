import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className="flex w-full items-center justify-center rounded-md bg-primary-300 h-12 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-300 focus-visible:outline disabled:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
        >
            {children}
        </button>
    )
}

export default Button