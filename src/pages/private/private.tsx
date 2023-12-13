import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';

const Dashboard = lazy(() => import('../dashboard/dashboard.page'));
const Events = lazy(() => import('../events/current.page'));
const CreateEvent = lazy(() => import('../events/create.page'));
const EventDetails = lazy(() => import('../events/edit.page'));
const Entries = lazy(() => import('../entries/entries.page'));
const CreateEntry = lazy(() => import('../entries/create-entry.page'));
const EntryDetails = lazy(() => import('../entries/entry-details.page'));
const ExchangeRate = lazy(() => import('../exchange-rate/exchange-rate.page'));

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.EVENTS} element={<Events />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.NEW_EVENT} element={<CreateEvent />} />
      <Route
        path={`${PrivateRoutes.EVENT_DETAILS}/:eventId`}
        element={<EventDetails />}
      />
      <Route path={`${PrivateRoutes.ENTRIES}/:eventId`} element={<Entries />} />
      <Route
        path={`${PrivateRoutes.NEW_ENTRY}/:eventId`}
        element={<CreateEntry />}
      />
      <Route
        path={`${PrivateRoutes.ENTRIES}/:eventId/${PrivateRoutes.ENTRY_DETAILS}/:entryId`}
        element={<EntryDetails />}
      />
      <Route path={PrivateRoutes.EXCHANGE_RATE} element={<ExchangeRate />} />
    </RoutesWithNotFound>
  );
}
export default Private;
