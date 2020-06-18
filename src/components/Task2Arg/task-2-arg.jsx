import React from 'react';
import s from './task-2-arg.module.css';

// Карточка для примера из 2х чисел
const Task2Arg = ({ a, b, type }) => {
	const task = `${a} ${type} ${b} = `;

	return (
			<div className={s.card}>
					<div className={s.task}>
							{task} 
					</div>
					<div className={s.result}></div>
			</div>
	);
}


export default Task2Arg;
