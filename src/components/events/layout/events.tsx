import React from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'
import { eventsFetcher } from '../../../services'
import { HeaderDashboard } from '../../dashboard/header'
import { HeaderType } from '../../common/layout/header'
import { Header } from '../../common'
import { Card } from '..'
import { PrivateRoutes } from '../../../models'

const LayoutEvents: React.FC<{}> = ({ }) => {
    const { data, error, isLoading } = useSWR('/events?sort=position&active=true&entries=true', eventsFetcher)
    const navigate = useNavigate()
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true })
    }

    if (isLoading) return (
        <div>Loading ...</div>
    )
    if (!isLoading && !error && data && data.data && data.data.length > 0)
        return (
            <HeaderDashboard children={<div className='flex w-full h-full flex-col'>
                <Header type={HeaderType.ADD} textRight={'Añadir evento'} actionRight={() => gotTo(`${PrivateRoutes.NEW_EVENT}`)} actionLeft={() => console.log('goBack')} title='Eventos' />
                <div className="mt-6  h-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2 lg:px-16" >
                    {data.data.map((event: any) => {
                        return <Card key={event.id} id={event.id} title={event.name as string} src={event.image} />
                    })}
                </div>
            </div>} />
        )
}

export default LayoutEvents