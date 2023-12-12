import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { userStore } from '../stores/user.store';
import { stat } from 'fs';

interface Props {
    privateValidation: boolean;
}

export const AuthGuard = () => {
    const isAuth = localStorage.getItem('access_token')
    return isAuth ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />

};

export default AuthGuard;