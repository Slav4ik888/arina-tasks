import { createEmptySchedule } from '.';
import { Schedule } from '..';
import { Time } from '../module/types';


export const headCells = [
  { id: 'time',      numeric: false, disablePadding: true, label: 'Время', weekend: false, width: 50 },
  { id: 'monday',    numeric: false, disablePadding: true, label: 'ПН',    weekend: false, width: 150 },
  { id: 'tuesday',   numeric: false, disablePadding: true, label: 'ВТ',    weekend: false, width: 150 },
  { id: 'wednesday', numeric: false, disablePadding: true, label: 'СР',    weekend: false, width: 150 },
  { id: 'thursday',  numeric: false, disablePadding: true, label: 'ЧТ',    weekend: false, width: 150 },
  { id: 'friday',    numeric: false, disablePadding: true, label: 'ПТ',    weekend: false, width: 150 },
  { id: 'saturday',  numeric: false, disablePadding: true, label: 'СБ',    weekend: true,  width: 150 },
  { id: 'sunday',    numeric: false, disablePadding: true, label: 'ВС',    weekend: true,  width: 150 }
];

export const EMPTY_SCHEDULE: Schedule = createEmptySchedule();
export const TIMES = Object.entries(Time);
