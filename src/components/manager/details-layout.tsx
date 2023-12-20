import React from 'react'
import { HeaderDashboard } from '../dashboard/header'
import Header, { HeaderType } from '../common/layout/header'
import { useNavigate, useParams } from 'react-router-dom'
import { PrivateRoutes, ROLES } from '@/models'
import { UserEditForm } from '../common/user'
import useSWR from 'swr'
import { managerFetcher } from '@/services/auth.service'
import { adapterUser } from '@/adapters/user.adapter'

const DetailsLayout: React.FC = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useSWR(`/users/${userId}`, managerFetcher)
    console.log(data)
    const { first_name, last_name, email, phone, adrress, birthday, image, active, identity } = adapterUser(data?.data)
    if (isLoading) return <div>Loading...</div>
    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true });
    };

    return (
        <HeaderDashboard
            children={
                <div className="flex w-full items-center justify-center h-full flex-col">
                    <Header
                        type={HeaderType.EDIT}
                        textRight={'Editar'}
                        actionRight={() => { }}
                        actionLeft={() => gotTo(PrivateRoutes.MANAGER)}
                        textLeft="Regresar"
                        title={first_name + " " + last_name}
                    />
                    <UserEditForm
                        name={first_name}
                        last_name={last_name}
                        email={email}
                        phone={phone}
                        address={adrress}
                        birthday={birthday}
                        identity={identity}
                        image={image}
                        status={active}

                    />
                </div>
            } />
    )
}

export default DetailsLayout