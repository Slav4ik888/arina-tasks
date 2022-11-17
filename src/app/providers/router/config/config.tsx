import { CreateSchedulePage } from 'pages/create-schedule';
import { CreateTasksPage } from 'pages/create-tasks';
import { NotFoundPage } from 'pages/not-found';
import { PrintTasksPage } from 'pages/print-tasks';
import { RootPage } from 'pages/root';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from './routes';



export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ROOT]: {
    path    : RoutePath.ROOT,
    element : <RootPage />
  },
  [AppRoutes.CREATE_TASKS]: {
    path    : RoutePath.CREATE_TASKS,
    element : <CreateTasksPage />
  },
  [AppRoutes.PRINT_TASKS]: {
    path    : RoutePath.PRINT_TASKS,
    element : <PrintTasksPage />
  },
  [AppRoutes.CREATE_SCHEDULE]: {
    path    : RoutePath.CREATE_SCHEDULE,
    element : <CreateSchedulePage />
  },
  [AppRoutes.NOT_FOUND]: {
    path    : RoutePath.NOT_FOUND,
    element : <NotFoundPage />
  }
}
