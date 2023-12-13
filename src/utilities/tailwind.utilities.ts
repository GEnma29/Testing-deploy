import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
