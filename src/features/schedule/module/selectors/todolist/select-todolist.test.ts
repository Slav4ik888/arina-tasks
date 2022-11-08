import { State } from 'app/providers/store/config/state';
import { TodoList } from 'features/schedule';
import { selectTodoList } from '.';


describe('selectTodoList', () => {
  test('Return scheduleTodoList', () => {
    const
      state: DeepPartial<State> = {
        schedule: { todoList: [`123`] as unknown as TodoList }
      };

    expect(selectTodoList(state as State)).toEqual([`123`]);
  });

  test('State is undefined', () => {
    expect(selectTodoList(undefined as unknown as State)).toEqual([]);
  });

  test('State is default', () => {
    const state: DeepPartial<State> = {};

    expect(selectTodoList(state as State)).toEqual([]);
  });
});

// npm run test:unit select-todolist.test.ts
