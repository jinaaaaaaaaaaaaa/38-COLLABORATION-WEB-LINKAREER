import { createBrowserRouter } from 'react-router';

import AppLayout from '@/layout/AppLayout';
import RecruitDetailLayout from '@/layout/RecruitDetailLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@pages/home/HomePage')).default,
        }),
      },
      {
        path: 'recruit',
        lazy: async () => ({
          Component: (await import('@pages/recruit/RecruitPage')).default,
        }),
      },
      {
        path: 'mento',
        lazy: async () => ({
          Component: (await import('@pages/mento/MentoPage')).default,
        }),
      },
    ],
  },
  {
    path: '/recruit/detail',
    element: <RecruitDetailLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@pages/recruitDetail/RecruitDetailPage'))
            .default,
        }),
      },
    ],
  },
]);

export default router;
