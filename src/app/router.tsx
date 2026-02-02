import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '../ui/layouts/AppLayout';
import { HomePage } from '../ui/pages/HomePage.tsx';
import { NotFoundPage } from '../ui/pages/NotFoundPage.tsx';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
