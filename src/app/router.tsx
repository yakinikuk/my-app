import { createBrowserRouter } from 'react-router-dom';
import { KanbanBoardPage } from '../pages/KanbanBoardPage';
import { TaskListPage } from '../pages/TaskListPage';
import { AppLayout } from '../ui/layouts/AppLayout';
import { HomePage } from '../ui/pages/HomePage.tsx';
import { NotFoundPage } from '../ui/pages/NotFoundPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '/tasks', element: <TaskListPage /> },
  { path: '/board', element: <KanbanBoardPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
