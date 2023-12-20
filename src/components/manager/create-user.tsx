import React from 'react'
import { HeaderDashboard } from '../dashboard/header'
import Header, { HeaderType } from '../common/layout/header'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes, ROLES } from '@/models'
import { UserCreate } from '@/components/common/user'

const CreateLayout: React.FC<{
    roles: ROLES
}> = ({ roles }) => {

    const navigate = useNavigate();
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
                        actionLeft={() => navigate(-1)}
                        textLeft="Regresar"
                        title="Create User"
                    />
                    <UserCreate
                        roles={roles}
                        name=''
                        last_name=''
                        email=''
                        phone=''
                        address=''
                        birthday={new Date()}
                        image=''
                        identity=''
                        status

                    />
                </div>
            } />
    )
}

export default CreateLayout;