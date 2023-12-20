import React from 'react'
import Item from './item.fragment'


type DetailsOrder = {
    id: string,
    payment_method: string,
    confirmation_number: string,
    confirmation_email: string,

}
type DetailsUser = {
    name: string,
    user: string,
    phone: string,
    email: string
}
const DeatilsOrder: React.FC<{
    user: DetailsUser,
    order: DetailsOrder,
}> = ({
    user: { name, user, phone, email },
    order: { id, payment_method, confirmation_number, confirmation_email }
}) => {
        return (
            <div className='flex bg-white w-full rounded-lg h-[20rem] lg:w-[40rem] p-4 flex-col'>
                <h2 className='font-bold text-xl mb-1'>Detalles del cliente</h2>
                <Item field='Nombre' value={name} />
                <Item field='Usuario' value={user} />
                <Item field='Teléfono' value={phone} />
                <Item field='Dirección' value={email} />
                <h2 className='font-bold text-xl mb-1'>Datos de la orden</h2>
                <Item field='ID de orden' value={id} />
                <Item field='Método de pago' value={payment_method} />
                <Item field='Nro. de confirmación' value={confirmation_number} />
                <Item field='Correo de confirmación' value={confirmation_email} />

            </div>
        )
    }

export default DeatilsOrder