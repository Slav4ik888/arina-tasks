import { ChangeEvent, FC, useState } from 'react';
// MUI Stuff
// Icons
import AddIcon from '@mui/icons-material/Add'; 
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';
import { FormControl, Input, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { TodoList } from 'features/schedule';
// Component


const useStyles = ((theme: Theme) => ({
  formControl: {
    display: 'flex',
    // flexWrap: 'wrap', // Убрал, чтобы при длинном тексте появлялось многоточие
    width: `100%`,
    // minWidth: 220,
    color: theme.textSecondary
  },
  select: {
    // display: 'flex',
    fontSize: theme.fontSize.todo,
    fontColor: theme.palette.fontColor.todo,
    fontWeight: theme.fontWeight.todo
  },
  lastItem: {
    color: theme.palette.primary.dark,
    fontStyle: `italic`
  },
  addIcon: {
    mr: 1
  },
  editIcon: {
    ml: 1
  }
}));


type Props = {
  todoList       : TodoList
  placeholder?   : string
  label          : string
  changeBtnText? : string
  disabled?      : boolean
  onSelected     : (title: string) => void
  onChangeItem   : () => void
}

/** Список todo с возможностью добавить новый */
const TodoListContainer: FC<Props> = (props) => {
  const
    sx = useStyles(useTheme() as Theme),
    {
      placeholder = 'Не выбрано',
      todoList, label, changeBtnText, disabled, onSelected, onChangeItem
    } = props,
    [valueSelected, setValueSelected] = useState(placeholder);
  
  const handlerChange = (e: SelectChangeEvent<string>) => {
    const id = e.target.value;

    if (id === 'newItemAdd') { // Если добавили новый
      return onChangeItem();
    }

    const item = todoList.find(item => item.title === id);
    
    if (item) {
      setValueSelected(item.title);
      onSelected(item.title);
    }
    else { // Не выбрали
      setValueSelected(placeholder);
      onSelected(placeholder);
    }
  };

  return (
    <FormControl
      variant  = 'outlined'
      disabled = {disabled}
      sx       = {sx.formControl}
    >
      <Select
        labelId  = {`${label}-label`}
        id       = {`${label}-select`}
        value    = {valueSelected}
        onChange = {handlerChange}
        input    = {<Input />}
        sx       = {sx.select}
      >
        {/* @ts-ignore */}
        <MenuItem
          value   = {placeholder}
          onClick = {handlerChange}
        >
          <em>{placeholder}</em>
        </MenuItem>
        {
          todoList && todoList.map((item, i) => <MenuItem
            key   = {item.title + i}
            value = {item.title}
          >
            {item.title}
          </MenuItem>)
        }
        {
          onChangeItem && <MenuItem
            value   = 'newItemAdd'
            sx      = {sx.lastItem}
            onClick = {onChangeItem}
          >
            <AddIcon sx={sx.addIcon} />
            {changeBtnText ? changeBtnText : 'добавить / изменить'}
          </MenuItem>
        }
      </Select>
    </FormControl>
  )
};

export default TodoListContainer;
