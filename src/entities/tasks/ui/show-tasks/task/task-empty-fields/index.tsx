import { FC } from 'react';
import { BaseField } from 'shared/ui';
import s from './index.module.scss';



export const TaskEmptyFields: FC = () => (
	<div className={s.root}>
		<BaseField classname={s.field}/>
	</div>
);
