import React from 'react';
import s from './header.module.css';

const today = () => {
  
  let day = new Date();
  return day;
}
// Рендер карточек
export const Header = () => {
  console.log('today: ', today());

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
          <div className={s.day}>2</div>
          <div className={s.day}>5</div>
        </div>
        .
        <div className={s.days}>
          <div className={s.day}>0</div>
          <div className={s.day}>6</div>
        </div>
        .
        <div className={s.year}>
          <div className={s.day}>2</div>
          <div className={s.day}>0</div>
          <div className={s.day}>2</div>
          <div className={s.day}>0</div>
        </div>
      </div>
      <div className={s.line}></div>
    </div>
  );
}