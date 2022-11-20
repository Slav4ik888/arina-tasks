export enum TaskType {
  ONE_ADD     = 'one_add',
  ONE_SUB     = 'one_sub',
  ONE_UNKNOWN = 'one_unknown',
  TWO_ADD_SUB = 'two_add_sub',
  TWO_UNKNOWN = 'two_unknown'
}


export enum TaskShowType {
  SHOW  = 'show',
  PRINT = 'print'
}


export interface TaskSettingsElement {
  amount : number
  min    : number
  max    : number
}


export type TasksSettings = Record<TaskType, TaskSettingsElement>;


export enum MathSign {
  ADD = '+',
  SUB = '-',
  MUL = '*',
  DIV = '/'
}


export interface Task {
  a       : number
  b       : number
  c?      : number
  type1   : MathSign // 1 знак
  type2?  : MathSign // 2 знак

  result? : number
}


export type Tasks = Task[];


export type ExPanel = TasksSettings & {
  lastTasks: Tasks  // Зачем то нужны последние созданные примеры
}

export interface StateTasks {
  tasks: Tasks
}
