/**
 * Возвращаем дату от timestamp в нужном формате
 * @param {Number} timestamp - таймстамп
 * @param {String} format - формат, в котором нужно вернуть timestamp
 *
 * @return {String} - дата в нужном формате
 */

export const showDate = (timestamp, format) => {

  const newDate = new Date(timestamp);
  const monthName = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
  let month = null;
  let day = null;

  const formatType = {
    monthYYYY: `Month YYYY`,
    yyyymmdd: `YYYY-MM-DD`,
    ddmmyyyy: `DD-MM-YYYY`,
  };

  switch (format) {
    case formatType.monthYYYY:
      return `${monthName[newDate.getMonth()]} ${newDate.getFullYear()}`;

    case formatType.yyyymmdd:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${newDate.getFullYear()}-${month}-${day}`;

    case formatType.ddmmyyyy:
      month = (`0` + (newDate.getMonth() + 1)).slice(-2);
      day = (`0` + newDate.getDate()).slice(-2);
      return `${day}-${month}-${newDate.getFullYear()}`;

    default:
      return timestamp;
  }
};
