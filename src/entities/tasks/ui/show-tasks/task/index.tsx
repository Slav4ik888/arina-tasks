import { FC } from 'react';
import { BaseField } from 'shared/ui';
import { Task } from '../../../model';
import s from './index.module.scss';



type Props = {
	task: Task
}


/** Карточка для примера из 2х чисел */
const Task: FC<Props> = ({ task: propsTask }) => {
	const { a, b, c, type1, type2 } = propsTask;

	let task = '';
	if (!type2) task = `${a} ${type1} ${b} = `;
	if (type2) task = `${a} ${type1} ${b} ${type2} ${c} =`;
	
	const styleCover = task.length > 12 ? { fontSize: '24px'} : {};

	return (
		<div className={s.card}>
			<div className={s.task} style={styleCover}>
				{task} 
			</div>
			<div className={s.result}>
				<BaseField />
				<BaseField />
			</div>
		</div>
	);
}


export default Task;
