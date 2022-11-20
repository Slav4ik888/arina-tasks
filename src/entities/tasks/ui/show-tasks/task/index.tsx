import { FC } from 'react';
import { isUndefined } from 'shared/lib/validators';
import { TaskEmptyFields } from './task-empty-fields';
import { Task, TaskShowType } from '../../../model';
import s from './index.module.scss';



type Props = {
  type : TaskShowType
	task : Task
}


/** Карточка для примера из 2х чисел */
const Task: FC<Props> = ({ type, task: propsTask }) => {
	const
		{ a, b, c, type1, type2, result } = propsTask,
		digits = [],
		styles = type !== TaskShowType.SHOW ? { background: '#fff' } : {};

	let task = '';

	if (isUndefined(a)) digits.push(<TaskEmptyFields />)
	else digits.push(<span className={s.span}>{a}</span>)

	digits.push(<span className={s.span}>{type1}</span>);

	if (isUndefined(b)) digits.push(<TaskEmptyFields />)
	else digits.push(<span className={s.span}>{b}</span>)

	
	if (!type2) task = `${a} ${type1} ${b} = `;
	else {
		task = `${a} ${type1} ${b} ${type2} ${c} =`;

		digits.push(<span className={s.span}>{type2}</span>);

		if (isUndefined(c)) digits.push(<TaskEmptyFields />)
		else digits.push(<span className={s.span}>{c}</span>)
	}

	digits.push(<span className={s.span}>=</span>);

	if (isUndefined(result)) digits.push(<TaskEmptyFields />)
	else digits.push(<span className={s.span}>{result}</span>)


	return (
		<div className={s.card} style={styles}>
			<div className={s.task}>
				{
					digits.map((d, i) => <span key={i}>{d}</span>)
				}
			</div>
		</div>
	);
}


export default Task;
