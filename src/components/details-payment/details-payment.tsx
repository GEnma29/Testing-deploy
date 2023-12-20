import React from 'react'
import Image from '@/assets/Saly-10.svg';
import Item from './item.fragment';
import { stautsUtilities } from '@/utilities/table.utilitites';

type PaymentInfo = {
    event: string;
    zone: string;
    tables: string;
    chairs: string;
    price: string;
    total: string;
    image: string;
}
const DetailsPaymentComponent: React.FC<{
    paymentInfo: PaymentInfo;
}> = ({ paymentInfo: { event, zone, tables, price, total, image, chairs } }) => {
    return (
        <div className='flex mb-4  flex-col w-full bg-white px-2 lg:px-14 lg:w-[24.625rem] py-6 rounded-lg'>
            <div className='flex lg:flex-col'>
                <img className='flex object-cover rounded-lg w-[10rem] h-[10rem] lg:w-[18.125rem] lg:h-[18.125rem] ' src={image} />
                <div className='flex ml-2  lg:mt-2 flex-col '>
                    <Item field='Evento' value={event} />
                    <Item field='Zona' value={zone} />
                    <Item field='Mesas/Sillas' value={`${tables} Mesas, ${chairs} sillas`} />
                    <Item field='Precio' value={`$${price}`} />
                    <Item field='Total' value={`$${total}`} />
                </div>
            </div>
            <div className='flex w-full justify-center items-center'>
                {stautsUtilities({ state: 'pending' })}
            </div>
        </div>
    )
}

export default DetailsPaymentComponent