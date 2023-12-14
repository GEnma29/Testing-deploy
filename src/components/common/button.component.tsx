import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  ...rest
}) => {
  const ButtonVariants = {
    primary:
      'flex w-full items-center justify-center rounded-md bg-primary-300 h-12 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-300 focus-visible:outline disabled:bg-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300',
    secondary:
      'flex w-full h-12 items-center justify-center  border-2 border-primary-300 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    outline:
      "flex w-full  items-center justify-center border border-input bg-white rounded-lg p-2 hover:bg-accent hover:text-accent-foreground",
    ghost: "flex hover:bg-primary-300 focus-visible:bg-primary-300  flex w-full  items-center justify-center border border-input bg-white rounded-lg p-2 ",
  };
  return (
    <button {...rest} onClick={onClick} className={ButtonVariants[variant]}>
      {children}
    </button>
  );
};

export default Button;
