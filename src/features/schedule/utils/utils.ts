import { TodoType } from '..';
import { Time, WeekDay, TodoRow, Schedule, Todo } from '../module/types';


/** Возвращает пустой todo с указанным временем */
const createEmptyTodo = (time: Time, weekDay: WeekDay): Todo => ({
  id    : `${time}-${weekDay}`,
  type  : TodoType.STRING,
  url   : '', // Ссылка на картинку
  title : '', // Текст задачи
  time,
  weekDay,
});


/** Возвращает строку с пустыми todo */
const createEmptyRowTodos = (time: Time): TodoRow => ({
  time,
  monday    : createEmptyTodo(time, WeekDay.MON),
  tuesday   : createEmptyTodo(time, WeekDay.TUE),
  wednesday : createEmptyTodo(time, WeekDay.WED),
  thursday  : createEmptyTodo(time, WeekDay.THU),
  friday    : createEmptyTodo(time, WeekDay.FRI),
  saturday  : createEmptyTodo(time, WeekDay.SAT),
  sunday    : createEmptyTodo(time, WeekDay.SUN)
});

export const TIMES = Object.entries(Time);

/** Create empty schedule */
const createEmptySchedule = (): Schedule => TIMES
  .map(time => createEmptyRowTodos(time as unknown as Time));

export const EMPTY_SCHEDULE: Schedule = createEmptySchedule();


/** Возвращает объект недели с обновлённым элементом соответствующий todo */
export const getUpdatedWeek = (row: TodoRow, todo: Todo) => {
  switch (todo.weekDay) {
    case WeekDay.MON: row.monday    = { ...todo }; break;
    case WeekDay.TUE: row.tuesday   = { ...todo }; break;
    case WeekDay.WED: row.wednesday = { ...todo }; break;
    case WeekDay.THU: row.thursday  = { ...todo }; break;
    case WeekDay.FRI: row.friday    = { ...todo }; break;
    case WeekDay.SAT: row.saturday  = { ...todo }; break;
    case WeekDay.SUN: row.sunday    = { ...todo }; break;
    
    default: break;
  };
  return row;
}

// const tasks = ['Сказбука', 'Примеры', 'Чтение', 'Рисование', 'Танцы', ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];

// function createData(time, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
//   return { time, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
// };

// const createRows = () => {
//   return times.map(time => createData(time, getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks)));
// };

// export const rows = createRows();





// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// export function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// export function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }
