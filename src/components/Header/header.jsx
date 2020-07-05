import React from 'react';
import s from './header.module.css';
import {showDate} from '../../utils/dates.js';

const today = showDate(new Date().getTime(), `DD-MM-YYYY`);


// Рендер карточек
export const Header = () => {
  // console.log('today: ', today());

  return (
    <div className={s.section}>

      <div className={s.card}>
        <div className={s.days}>
          <div className={s.day}></div>
          <div className={s.day}></div>
        </div>
        .
        <div className={s.days}>
          <div className={s.day}></div>
          <div className={s.day}></div>
        </div>
        .
        <div className={s.year}>
          <div className={s.day}></div>
          <div className={s.day}></div>
          <div className={s.day}></div>
          <div className={s.day}></div>
        </div>
      </div>

      <div className={s.card}>
        <div className={s.days}>
          <div className={s.day}>{today[0]}</div>
          <div className={s.day}>{today[1]}</div>
        </div>
        .
        <div className={s.days}>
          <div className={s.day}>{today[3]}</div>
          <div className={s.day}>{today[4]}</div>
        </div>
        .
        <div className={s.year}>
          <div className={s.day}>{today[6]}</div>
          <div className={s.day}>{today[7]}</div>
          <div className={s.day}>{today[8]}</div>
          <div className={s.day}>{today[9]}</div>
        </div>
      </div>
      <div className={s.line}></div>
    </div>
  );
}