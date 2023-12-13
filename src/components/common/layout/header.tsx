import React from 'react';
import { AddIcon, ArrowBack, EditIcon } from '../../../icons';
import { useMediaQuery } from '../../../hooks';
import { cn } from '@/utilities';

export enum HeaderType {
  ADD,
  EDIT,
}
const Header: React.FC<{
  title: string;
  actionLeft: () => void;
  type?: HeaderType;
  textRight?: string;
  textLeft?: string;
  actionRight: () => void;
  className?: string;
}> = ({
  title,
  actionLeft,
  actionRight,
  type = undefined,
  textRight,
  textLeft,
  className,
}) => {
  const isDesktopView = useMediaQuery('(min-width: 1024px)');
  return (
    <div className={cn('flex w-full items-center justify-between', className)}>
      <div
        onClick={actionLeft}
        className="hidden lg:flex items-center cursor-pointer"
      >
        {textLeft && <ArrowBack className="" />}
        <p className=" text-xs mr-2  lg:text-lg text-black-300 ">{textLeft}</p>
      </div>
      <div className="flex font-bold text-primary-300">
        <div
          onClick={isDesktopView ? () => {} : actionLeft}
          className="flex cursor-pointer items-center "
        >
          <ArrowBack className="lg:hidden" />
          <h1 className="text-xs lg:text-2xl ">{title}</h1>
        </div>
      </div>
      <div className="flex">
        <div
          onClick={actionRight}
          className={textRight ? 'flex items-center cursor-pointer' : 'hidden'}
        >
          <p className=" text-xs mr-2  lg:text-lg text-black-300 ">
            {textRight}
          </p>
          {type === HeaderType.ADD ? <AddIcon /> : <EditIcon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
