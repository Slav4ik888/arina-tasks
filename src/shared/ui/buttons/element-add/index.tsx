import { ChangeEvent, FC, KeyboardEvent, useMemo, useState } from 'react';
// Redux
import { selectScheduleError, scheduleActions as actions, TodoElement } from 'features/schedule';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
// MUI Stuff
import { Avatar, FormControl, IconButton, InputBase, Paper } from '@mui/material';
// Icons
import AddIcon from '@mui/icons-material/Add';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
// Components
// Functions
import { Theme } from 'app/providers/theme';
import { useTheme } from '@emotion/react';



const useStyles = ((theme: Theme) => ({
  form: {
    backgroundColor: theme.palette.background.moduleAddInput
  },
  formControl: {
    m: 3,
    mb: 2,
    py: 1.5,
    pr: 4,
    pl: 2,
    minWidth: 300,
    display: `flex`,
    alignItems: `center`,
    backgroundColor: theme.palette.background.moduleAdd
  },
  input: {
    width: `calc(100% - 100px)`,
    flex: 1,
    backgroundColor: theme.palette.background.moduleAddInput,
    borderRadius: `10px`,
    mx: 2,
    py: 1,
    px: 3
  },
  avatar: {
    backgroundColor: theme.palette.primary.light
  },
  avatarIcon: {
    height: `34px`,
    width: `34px`
  }
}));

export interface AddElementData {
  placeholder : string
  label       : string
  icon        : JSX.Element
}

type Props = {
  type  : TodoElement
  onAdd : (title: string) => void
}

export const ElementAdd: FC<Props> = ({ type, onAdd }) => {
  const
    sx = useStyles(useTheme() as Theme),
    [title, setTitle] = useState(''),
    dispatch = useAppDispatch(),
    error = useSelector(selectScheduleError);

  const template = useMemo(() => {
    const template = {} as AddElementData;

    switch (type) {
      case TodoElement.TODOS:
        template.placeholder = 'Добавить мероприятие';
        template.label       = 'Новое мероприятие';
        template.icon        = <EmojiNatureIcon />;
        break;
      
      default: break;
    }
    return template
  }, []);

  const handlerEdit = (e: ChangeEvent<HTMLInputElement>) => {
    switch ((e as unknown as KeyboardEvent<HTMLInputElement>).keyCode) {
      case 13:
        handlerAdd();
        break;
      
      default: break;
    } 

    const newTitle = (e.target).value;

    if (newTitle.length < 20) {
      if (error.general) dispatch(actions.clearError());
      setTitle(newTitle);
    }
    else dispatch(actions.setError({ general: 'Длина строки должна быть меньше 20 символов' }));
  };


  const handlerAdd = () => {
    if (title.trim() !== '') onAdd(title);
    else dispatch(actions.setError({ general: 'Название мероприятия не должно быть пустым' }));
    setTitle('');
  };

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    handlerAdd();
  };

  return (
    <FormControl sx={sx.form} onSubmit={handlerSubmit}>
      <Paper sx={sx.formControl}>
        <Avatar>{template.icon}</Avatar>
        <InputBase
          placeholder = {template.placeholder}
          inputProps  = {{ 'aria-label': template.label }}
          type        = 'text'
          value       = {title}
          sx          = {sx.input}
          onChange    = {handlerEdit}
        />
        <IconButton aria-label='Add' onClick={handlerAdd}>
          <AddIcon />
        </IconButton>
      </Paper>
    </FormControl>
  );
}
