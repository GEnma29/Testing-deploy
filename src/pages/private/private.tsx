import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';

const Dashboard = lazy(() => import('../dashboard/dashboard.page'));
const Events = lazy(() => import('../events/current.page'));

function Private() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.EVENTS} element={<Events />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </RoutesWithNotFound>
    );
}
export default Private;