import { State } from 'app/providers/store/config/state';

export const selectTodoList = (state: State) => state?.schedule?.todoList || []
