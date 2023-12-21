import React, { useEffect } from 'react';
import { HeaderDashboard } from '../header';
import { userStore } from '../../../stores/user.store';
import { useNavigate } from 'react-router-dom';
import { AnalyticsRoutes, PrivateRoutes, ROLES } from '@/models';

const DashboardLayout = () => {
  const user = userStore((state) => state);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('user', user)
    user.role.public[0] === ROLES.EVENT_ANALYTICS ?
      navigate(`/${AnalyticsRoutes.ANALYTICS}/${AnalyticsRoutes.PAYMENTS}`, { replace: true })
      :
      navigate(`/private/${PrivateRoutes.EVENTS}`, { replace: true })


    return () => { }
  }, [user, navigate])

  return <HeaderDashboard children={<p>analytics for events </p>} />;
};

export default DashboardLayout;
