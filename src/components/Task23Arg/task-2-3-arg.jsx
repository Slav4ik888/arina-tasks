import React from 'react';
import s from './task-2-3-arg.module.css';

// Карточка для примера из 2х чисел
const Task23Arg = ({ a, type1, b, type2, c}) => {
	let task = '';
	if (!type2) task = `${a} ${type1} ${b} = `;
	if (type2) task = `${a} ${type1} ${b} ${type2} ${c} = `;


	return (
			<div className={s.card}>
					<div className={s.task}>
							{task} 
					</div>
					<div className={s.result}></div>
			</div>
	);
}


export default Task23Arg;
