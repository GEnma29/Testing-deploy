import { lazy, Suspense, useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
// routes
import { PrivateRoutes, PublicRoutes } from './models'
import { AuthGuard } from './guards'
// utilities
import { RoutesWithNotFound } from './utilities';
// lazy pages
const Login = lazy(() => import('./pages/login/login.page'))
const RecoverPassword = lazy(() => import('./pages/recover-password/recover-password.page'))
const Private = lazy(() => import('./pages/private/private'))
function App() {
  // TODO: create dark mode in tailwind 
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  return (
    <div className={isDarkMode ? ' p-2 min-h-screen bg-background-400' : ' p-2 min-h-screen bg-background-200'}>
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          {/* <Logout /> */}
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.RECOVER_PASSWORD} element={<RecoverPassword />} />
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
            {/* <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route> */}
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
