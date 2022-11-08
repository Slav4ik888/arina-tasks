export enum AppRoutes {
  ROOT            = 'ROOT',
  CREATE_TASKS    = 'CREATE_TASKS',
  CREATE_SCHEDULE = 'CREATE_SCHEDULE',
  NOT_FOUND       = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ROOT]            : '/',
  [AppRoutes.CREATE_TASKS]    : '/create-tasks',
  [AppRoutes.CREATE_SCHEDULE] : 'create-schedule',
  [AppRoutes.NOT_FOUND]       : '*'
}
