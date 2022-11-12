import { SUB } from "../utils/consts";
import { FORMAT } from '..';

/**
 * Возвращаем дату от time в нужном формате
 * @return {string} - дата в нужном формате
 */
export default function formatDate(
  ms          : number | string,
  format      : FORMAT,
  sub?        : SUB
): string;
