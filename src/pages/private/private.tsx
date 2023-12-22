import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, ROLES } from '../../models';
import { RoutesWithNotFound } from '../../utilities';


// pages
const Dashboard = lazy(() => import('../dashboard/dashboard.page'));
const Events = lazy(() => import('../events/current.page'));
const History = lazy(() => import('../events/history'))
const CreateEvent = lazy(() => import('../events/create.page'));
const EventDetails = lazy(() => import('../events/edit.page'));
const Entries = lazy(() => import('../entries/entries.page'));
const CreateEntry = lazy(() => import('../entries/create-entry.page'));
const EntryDetails = lazy(() => import('../entries/entry-details.page'));
const ExchangeRate = lazy(() => import('../exchange-rate/exchange-rate.page'));
const Payments = lazy(() => import('../payments/payments.page'));
const PendingPayment = lazy(() => import('../pending-payment/pending-payment.page'));
const PaymentDetails = lazy(() => import('../payments/payment-details.page'));
const Manager = lazy(() => import('../manager/list-manager.page'));
const CreateManager = lazy(() => import('../manager/create.page'));
const CreateProtocolUser = lazy(() => import('../protocol/create-user'));
const CreateCashierUser = lazy(() => import('../cashiers/create-cashier.page'));
const DetailsUser = lazy(() => import('../manager/details.page'));
const Cashier = lazy(() => import('../cashiers/cashiers.page'));
const Protocol = lazy(() => import('../protocol/protocol.page'))
const WeAreWorkingOnIt = lazy(() => import('../not-found/working-on-it.page'))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.EVENTS} element={<Events />} />
      <Route path={PrivateRoutes.EVENTS_HISTORY} element={<History />} />
      <Route path={PrivateRoutes.CREATE_MANAGER} element={<CreateManager />} />
      <Route path={PrivateRoutes.MANAGER} element={<Manager />} />
      <Route path={`${PrivateRoutes.MANAGER}/:userId`} element={<DetailsUser />} />
      <Route path={PrivateRoutes.CREATE_CASHIER} element={<CreateCashierUser />} />
      <Route path={PrivateRoutes.CASHIERS} element={<Cashier />} />
      <Route path={`${PrivateRoutes.CASHIERS}/:userId`} element={<DetailsUser />} />
      <Route path={PrivateRoutes.PROTOCOL} element={<Protocol />} />
      <Route path={`${PrivateRoutes.PROTOCOL}/:userId`} element={<DetailsUser />} />
      <Route path={PrivateRoutes.CREATE_PROTOCOL} element={<CreateProtocolUser />} />
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
      <Route path={`${PrivateRoutes.PAYMENTS}`} element={<Payments />} />
      <Route path={`${PrivateRoutes.PAYMENTS}/:paymentId`} element={<PaymentDetails />} />
      <Route path={PrivateRoutes.PENDING_PAYMENT} element={<PendingPayment />} />
      <Route path={PrivateRoutes.SETTINGS} element={<WeAreWorkingOnIt />} />
      <Route path={PrivateRoutes.BALANCE} element={<WeAreWorkingOnIt />} />


    </RoutesWithNotFound>
  );
}
export default Private;
