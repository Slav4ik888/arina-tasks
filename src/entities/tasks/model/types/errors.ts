import { TaskType } from './tasks';

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