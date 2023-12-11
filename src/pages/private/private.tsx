import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';

const Dashboard = lazy(() => import('../dashboard/dashboard.page'));
const Events = lazy(() => import('../events/current.page'));
const CreateEvent = lazy(() => import('../events/create.page'));
const EventDetails = lazy(() => import('../events/edit.page'));

function Private() {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.EVENTS} element={<Events />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.NEW_EVENT} element={<CreateEvent />} />
            <Route path={`${PrivateRoutes.EVENT_DETAILS}/:eventId`} element={<EventDetails />} />
        </RoutesWithNotFound>
    );
}
export default Private;