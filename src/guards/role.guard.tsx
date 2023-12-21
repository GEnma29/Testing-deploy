import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { userStore } from '@/stores/user.store';


interface Props {
    rol: string;
    redirect: string
}

function RoleGuard({ rol, redirect }: Props) {
    const { role } = userStore((state) => state);
    return role.public[0] === rol ? <Outlet /> : <Navigate replace to={redirect} />;
}
export default RoleGuard;