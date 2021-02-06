import { getRandomElement } from '../../utils/random';
import { typeTodo } from '../../services/types';


export const weekDays = {
  monday: `Понедельник`,
  tuesday: `Вторник`,
  wednesday: `Среда`,
  thursday: `Четверг`,
  friday: `Пятница`,
  saturday: `Суббота`,
  sunday: `Воскресенье`,
};

const times = [`8:00`, `9:00`, `10:00`, `11:00`, `12:00`, `13:00`, `14:00`, `15:00`, `16:00`, `17:00`, `18:00`, `19:00`];

// Возвращает пустой todo с указанным временем
const createEmptyTodo = (time, weekDay) => ({
  id: `${time}-${weekDay}`,
  type: typeTodo.STRING,
  url: ``, // Ссылка на картинку
  title: ``, // Текст задачи
  time,
  weekDay,
});

// Возвращает строку с пустыми todo
const createEmptyRowTodos = (time) => ({
  time,
  monday: createEmptyTodo(time, weekDays.monday),
  tuesday: createEmptyTodo(time, weekDays.tuesday),
  wednesday: createEmptyTodo(time, weekDays.wednesday),
  thursday: createEmptyTodo(time, weekDays.thursday),
  friday: createEmptyTodo(time, weekDays.friday),
  saturday: createEmptyTodo(time, weekDays.saturday),
  sunday: createEmptyTodo(time, weekDays.sunday)
});

const createEmptyTodos = () => {
  return times.map(time => createEmptyRowTodos(time));
};

export const emptyTodos = createEmptyTodos();

/**
 * Возвращает объект недели с обновлённым элементом соответствующий todo
 * @param {Object} obj - объект недели 
 * @param {Object} todo 
 */
export const getUpdatedWeek = (obj, todo) => {
  switch (todo.weekDay) {
      case weekDays.monday:
        obj.monday = Object.assign({}, todo);
        break;
      case weekDays.tuesday:
        obj.tuesday = Object.assign({}, todo);
        break;
      case weekDays.wednesday:
        obj.wednesday = Object.assign({}, todo);
        break;
      case weekDays.thursday:
        obj.thursday = Object.assign({}, todo);
        break;
      case weekDays.friday:
        obj.friday = Object.assign({}, todo);
        break;
      case weekDays.saturday:
        obj.saturday = Object.assign({}, todo);
        break;
      case weekDays.sunday:
        obj.sunday = Object.assign({}, todo);
        break;
    
    default: break;
  };
  return obj;
}

const tasks = ['Сказбука', 'Примеры', 'Чтение', 'Рисование', 'Танцы', ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``, ``];

function createData(time, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { time, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
};

const createRows = () => {
  return times.map(time => createData(time, getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks), getRandomElement(tasks)));
};

export const rows = createRows();





function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const headCells = [
  { id: 'time', numeric: false, disablePadding: true, label: 'Время', weekend: false, width: 50 },
  { id: 'monday', numeric: false, disablePadding: true, label: 'ПН', weekend: false, width: 150 },
  { id: 'tuesday', numeric: false, disablePadding: true, label: 'ВТ', weekend: false, width: 150 },
  { id: 'wednesday', numeric: false, disablePadding: true, label: 'СР', weekend: false, width: 150 },
  { id: 'thursday', numeric: false, disablePadding: true, label: 'ЧТ', weekend: false, width: 150 },
  { id: 'friday', numeric: false, disablePadding: true, label: 'ПТ', weekend: false, width: 150 },
  { id: 'saturday', numeric: false, disablePadding: true, label: 'СБ', weekend: true, width: 150 },
  { id: 'sunday', numeric: false, disablePadding: true, label: 'ВС', weekend: true, width: 150 },
];
