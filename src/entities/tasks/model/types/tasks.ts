export enum TaskType {
  PLUS_SIMPLE  = 'plus_simple',
  MINUS_SIMPLE = 'minus_simple',
  TWO_ACTION   = 'two_action'
}


export enum MathSign {
  PLUS  = '+',
  MINUS = '-',
  MULT  = '*',
  DIV   = '/'
}


export interface Task {
  a      : number
  b      : number
  c?     : number
  // type   : MathSign // Для промежуточного вычисления (createMultyTasks)
                    // возможно надо удалить (проверить после написания тестов)
  type1  : MathSign // 1 знак
  type2? : MathSign // 2 знак
}


export type Tasks = Task[];


export interface ExPanel {
  minMinus       : number
  maxMinus       : number
  minPlus        : number
  maxPlus        : number
  qualMinusTasks : number
  qualPlusTasks  : number
  minMulty       : number
  maxMulty       : number
  qualMultyTasks : number
  lastTasks      : Tasks
}

export interface StateTasks {
  tasks: Tasks
}
