import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import { Spin } from 'antd';

import DashboardMain from '@pages/dashboard/DashboardMain';
import DashboardLayout from '@layouts/index';
// ----------------------------------------------------------------------

const Loadable = (Component: React.ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  console.log('[routes(index)/ Loadable] present pathName :', pathname);

  return (
    <Suspense fallback={<Spin />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" replace /> },
        { path: 'home', element: <Home /> },
        {
          path: 'dashboard',
          element: <DashboardMain />,
          children: [
            { element: <Navigate to="/dashboard/summary" replace /> },
            { path: 'summary', element: <Summary /> },
            { path: 'cognitive-training', element: <CongnitiveTraninig /> },
            { path: 'life-management', element: <LifeManagement /> },
          ],
        },
      ],
    },
  ]);
}

// Main
const Home = Loadable(lazy(() => import('@pages/home/Home')));
const Summary = Loadable(lazy(() => import('@pages/summary/Summary')));
const CongnitiveTraninig = Loadable(
  lazy(() => import('@pages/cognitiveTraining/CognitiveTraining'))
);
const LifeManagement = Loadable(
  lazy(() => import('@pages/lifeManagement/LifeManagement'))
);
