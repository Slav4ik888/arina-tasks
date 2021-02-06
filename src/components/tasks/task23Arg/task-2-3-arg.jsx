import React from 'react';
import s from './task-2-3-arg.module.css';
import cl from 'classnames';


// Карточка для примера из 2х чисел
const Task23Arg = ({ a, type1, b, type2, c}) => {
	let task = '';
	if (!type2) task = `${a} ${type1} ${b} = `;
	if (type2) task = `${a} ${type1} ${b} ${type2} ${c} =`;
	
	const styleCover = task.length > 11 ? { fontSize: '24px'} : {};

	return (
			<div className={s.card}>
					<div className={cl(s.task)} style={styleCover}>
							{task} 
					</div>
					<div className={s.result}>
						<div className={s.arg}></div>
						<div className={s.arg}></div>
        	</div>
			</div>
	);
}


export default Task23Arg;
