import React from 'react';
import { HeaderDashboard } from '../header';
import { userStore } from '../../../stores/user.store';

const DashboardLayout = () => {
  const user = userStore((state) => state);
  console.log(user);
  return <HeaderDashboard children={<p>TEst</p>} />;
};

export default DashboardLayout;
