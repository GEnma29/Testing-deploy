import React from 'react'
import { Header } from '@/components/common';
import { HeaderType } from '@/components/common/layout/header';
import { HeaderDashboard } from '@/components/dashboard/header';
import { PrivateRoutes } from '@/models';
import { useNavigate, } from 'react-router-dom';
import useSWR from 'swr';
import { entriesFetcher } from '@/services/entries.service';
import ItemPanel from '@/components/common/item-panel.component';
import { ProtocolIcon } from '@/icons';
import { managerFetcher } from '@/services/auth.service';

const ManagerLayout: React.FC = () => {
    const navigate = useNavigate();

    const gotTo = (route: string) => {
        navigate(`/private/${route}`, { replace: true });
    };

    const { data, isLoading, error } = useSWR(
        `/users?role=manager_logistics&limit=1000`,
        managerFetcher,
    );


    return (
        <HeaderDashboard
            children={
                <div className="flex w-full h-full flex-col">
                    <Header
                        type={HeaderType.EDIT}
                        textRight={'Añadir manager'}
                        actionRight={() => gotTo(PrivateRoutes.CREATE_MANAGER)}
                        actionLeft={() => gotTo(PrivateRoutes.EVENTS)}
                        textLeft="Regresar"
                        title="Manager"
                    />
                    {isLoading && <p>loading...</p>}
                    <div className="my-8 px-4 h-full grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-2 lg:px-4">
                        {data &&
                            !isLoading &&
                            !error &&
                            data.data.map((manager: any) => {
                                return (
                                    <ItemPanel onClick={() => gotTo(`${PrivateRoutes.MANAGER}/${manager.id}`)} key={manager.id} icon={<ProtocolIcon />} title={`${manager.first_name} ${manager.last_name}`} description={'manager'} status={manager.active} />
                                );
                            })}
                    </div>
                </div>
            }
        />
    )
}

export default ManagerLayout