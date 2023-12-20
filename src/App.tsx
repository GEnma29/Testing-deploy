import { lazy, Suspense, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
// routes
import { AnalyticsRoutes, PrivateRoutes, PublicRoutes, ROLES } from './models';
import { AuthGuard } from './guards';
// utilities
import { RoutesWithNotFound } from './utilities';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfiguration } from './utilities/snackbar-manager';
import { SWRConfig } from 'swr';
import RoleGuard from './guards/role.guard';
//import { localStorageProvider } from './providers/local-storage.provider';
// lazy pages
const Login = lazy(() => import('./pages/login/login.page'));
const RecoverPassword = lazy(
  () => import('./pages/recover-password/recover-password.page'),
);
const Private = lazy(() => import('./pages/private/private'));
const Analytics = lazy(() => import('./pages/analytics-viwer/analytics-viwer'));
function App() {
  // TODO: create dark mode in tailwind
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <SWRConfig>
      <SnackbarProvider>
        <SnackbarUtilitiesConfiguration />
        <div
          className={
            isDarkMode
              ? 'min-h-screen bg-background-400'
              : 'min-h-screen bg-background-100'
          }
        >
          <Suspense fallback={<>Cargando</>}>
            <BrowserRouter>
              <RoutesWithNotFound>
                <Route
                  path="/"
                  element={<Navigate to={PrivateRoutes.PRIVATE} />}
                />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route
                  path={PublicRoutes.RECOVER_PASSWORD}
                  element={<RecoverPassword />}
                />
                <Route element={<AuthGuard />}>
                  <Route
                    path={`${PrivateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
                <Route element={<RoleGuard rol={ROLES.EVENT_ANALYTICS} redirect={AnalyticsRoutes.PAYMENTS} />}>
                  <Route
                    path={`${AnalyticsRoutes.PAYMENTS}/*`}
                    element={<Analytics />}
                  />
                </Route>

              </RoutesWithNotFound>
            </BrowserRouter>
          </Suspense>
        </div>
      </SnackbarProvider>
    </SWRConfig>
  );
}

export default App;
