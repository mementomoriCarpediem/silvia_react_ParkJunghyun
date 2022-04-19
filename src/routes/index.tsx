import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import { Spin } from 'antd';

import DashboardLayout from '@layouts/index';
// ----------------------------------------------------------------------

const Loadable = (Component: React.ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { pathname } = useLocation();
  // console.log('[routes(index)/ Loadable] present pathName :', pathname);

  return (
    <Suspense
      fallback={
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <Spin />
        </div>
      }
    >
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
        { path: 'dashboard/summary', element: <Summary /> },
        {
          path: 'dashboard/cognitive-training',
          element: <CongnitiveTraninig />,
        },
        { path: 'dashboard/life-management', element: <LifeManagement /> },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import('@pages/home/Home')));
const Summary = Loadable(
  lazy(() => import('@pages/dashboard/summary/Summary'))
);
const CongnitiveTraninig = Loadable(
  lazy(() => import('@pages/dashboard/cognitiveTraining/CognitiveTraining'))
);
const LifeManagement = Loadable(
  lazy(() => import('@pages/dashboard/lifeManagement/LifeManagement'))
);
