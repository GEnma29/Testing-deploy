import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models'

const Card: React.FC<{
    title: string
    src: string
    id: string
}> = ({ title, src, id }) => {
    const navigate = useNavigate()
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const gotTo = (route: string) => { navigate(`/private/${route}`, { replace: true }) }
    return (
        <div onClick={() => { gotTo(`${PrivateRoutes.EVENT_DETAILS}/${id}`) }} className=" rounded-lg w-full cursor-pointer bg-white lg:w-72  shadow-xl">
            <figure><img className='h-60 w-full rounded-t-lg' src={src} alt={title} /></figure>
            <div className=" justify-center items-center">
                <h2 className="flex p-4 font-bold justify-center items-center text-primary-300">{title}</h2>
            </div>
        </div>
    )
}

export default Card
