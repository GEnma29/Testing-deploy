import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { userStore } from '../stores/user.store';

interface Props {
    privateValidation: boolean;
}

export const AuthGuard = () => {
    const isAuth = userStore((state) => state.isAuth)
    return isAuth ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />

};

export default AuthGuard;