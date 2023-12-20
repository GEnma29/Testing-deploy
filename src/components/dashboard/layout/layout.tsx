import React, { useEffect } from 'react';
import { HeaderDashboard } from '../header';
import { userStore } from '../../../stores/user.store';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '@/models';

const DashboardLayout = () => {
  const user = userStore((state) => state);
  const navigate = useNavigate()

  useEffect(() => {
    user.role.funkart[0] === 'admin' ?
      navigate(`/private/${PrivateRoutes.EVENTS}`, { replace: true })
      :
      navigate(`/analytics/${PrivateRoutes.DASHBOARD}`, { replace: true })

    return () => { }
  }, [user, navigate])

  return <HeaderDashboard children={<p>analytics for events </p>} />;
};

export default DashboardLayout;
