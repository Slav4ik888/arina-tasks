import { Time, WeekDay } from './enums';
export * from './enums';


export interface Todo {
  id       : string
  type?    : TodoType
  url?     : string // Ссылка на картинку
  title    : string // Текст задачи
  time?    : Time
  weekDay? : WeekDay
}

export interface TodoRow {
  time      : Time
  monday    : Todo
  tuesday   : Todo
  wednesday : Todo
  thursday  : Todo
  friday    : Todo
  saturday  : Todo
  sunday    : Todo
}

export interface ScheduleError {
  [k: string]: string
}

export interface TodoListItem {
  id    : number
  title : string
}

export type TodoList = Array<TodoListItem>

export type Schedule = TodoRow[]

export interface StateSchedule {
  error    : ScheduleError
  schedule : Schedule
  todoList : TodoList
}


// Типы для todos
export enum TodoType {
  STRING = `Текст`,
  ICON   = `Картинка`
}


// Типы для
export enum TodoElement {
  TODOS    = `Мероприятие`,
  DOC      = `DOC`,
  POS      = `POS`,
  SECTION  = `Раздел`,
  RULE     = `Правило`,
  QUESTION = `QUESTION`,
  ANSWER   = `Ответ`,
  EMPLOYEE = `EMPLOYEE`,
};
