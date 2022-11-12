import { Task } from 'app/types/types';
import { FC } from 'react';
import s from './index.module.scss';


type Props = {
	task: Task
}


/** Карточка для примера из 2х чисел */
const Task23Arg: FC<Props> = ({ task: propsTask }) => {
	const { a, b, c, type1, type2 } = propsTask;

	let task = '';
	if (!type2) task = `${a} ${type1} ${b} = `;
	if (type2) task = `${a} ${type1} ${b} ${type2} ${c} =`;
	
	const styleCover = task.length > 11 ? { fontSize: '24px'} : {};

	return (
		<div className={s.card}>
			<div className={s.task} style={styleCover}>
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
