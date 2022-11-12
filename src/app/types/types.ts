// Типы для Confirm
export enum ConfirmType {
  DEL          = 'Удалить',
  SAVE         = 'Сохранить',
  SAVE_EXIT    = 'Сохранить и выйти',
  WITHOUT_SAVE = 'Не сохранять',
  NO_QUESTIONS = 'Понятно',
  CONFIRM      = 'Подтвердить',
  UN_BIND      = 'Открепить'
};


export enum MathSign {
  PLUS  = '+',
  MINUS = '-',
  MULT  = '*',
  DIV   = '/'
}


export enum TaskType {
  PLUS_SIMPLE = 'plus_simple',
  MINUS_SIMPLE = 'minus_simple',
  TWO_ACTION = 'two_action'
}


export interface TaskError {
  taskType : TaskType
  anchorEl : Element
  message  : TastErrorMessage
}


export enum TastErrorMessage {
  PLUS_QUAL_01  = 'Количество примеров должно быть > 0 и < 100',
  PLUS_MIN_01   = 'Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100',
  PLUS_MAX_01   = 'Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100',
  MINUS_QUAL_01 = 'Количество примеров должно быть > 0 и < 100',
  MINUS_MIN_01  = 'Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100',
  MINUS_MAX_01  = 'Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100',
  TWO_QUAL_01   = 'Количество примеров должно быть > 0 и < 100',
  TWO_MIN_01    = 'Число "от" должно быть < числа "до" и любое число должно быть > 0 и < 100',
  TWO_MAX_01    = 'Число "до" должно быть > числа "от" и любое число должно быть > 0 и < 100',
}


export interface Task {
  a     : number
  b     : number
  c     : number
  type  : MathSign // Для промежуточного вычисления (createMultyTasks)
                   // возможно надо удалить (проверить после написания тестов)
  type1 : MathSign // 1 знак
  type2 : MathSign // 2 знак
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
