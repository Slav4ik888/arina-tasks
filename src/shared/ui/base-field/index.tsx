import { FC, useRef, ChangeEvent, KeyboardEvent, useEffect, KeyboardEventHandler } from 'react';
import { cn } from 'shared/lib/class-names';
import s from './index.module.scss';



type Props = {
	value?     	 : number
	classname?   : string
	isOpenInput? : boolean
	onClick?   	 : () => void
	onChange?  	 : (value: number, key: string) => void
	onBlur?    	 : () => void
}


export const BaseField: FC<Props> = (props) => {
	const
		{ isOpenInput, value, classname, onClick, onChange, onBlur } = props,
		ref = useRef<HTMLInputElement>(null);
		// styles = square ? { width: `${square}px`, height: `${square}px`} : {};

	
	useEffect(() => {
		if (isOpenInput) ref.current.focus();
	}, [isOpenInput]);


	const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
		const
			value = +e.target.value,
			key = (e as unknown as KeyboardEvent<HTMLInputElement>).key;
			
		onChange(value, key);
		if (key === 'Enter' || key === 'Escape') ref.current.blur();
	};

	
	const handlerBlur = () => {
		onBlur?.();
	};


	return (
		<div
			className = {cn(s.root, {}, [classname])}
			onClick   = {onClick}
		>
			{
				isOpenInput 
					? <input
							type      = 'number'
							value     = {value}
							ref 			= {ref}
							className = {cn(s.root, {}, [s.input] )}
							onChange  = {handlerChange}
							onBlur    = {handlerBlur}
							onKeyDown = {handlerChange as unknown as KeyboardEventHandler<HTMLInputElement>}
						/>
					: value
			}
		</div>
	);
}
