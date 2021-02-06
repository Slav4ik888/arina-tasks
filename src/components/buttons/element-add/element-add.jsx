import React, {useState} from 'react';
import pt from 'prop-types';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
// Icons
import AddIcon from '@material-ui/icons/Add';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
// Components
// Functions
import { typeElem } from '../../../services/types';


const useStyles = makeStyles((theme) => ({
  form: {
    backgroundColor: theme.palette.background.moduleAddInput,
  },
  formControl: {
    margin: theme.spacing(3, 3, 2, 3),
    padding: theme.spacing(1.5, 4, 1.5, 2),
    minWidth: 300,
    display: `flex`,
    alignItems: `center`,
    backgroundColor: theme.palette.background.moduleAdd,
  },
  input: {
    margin: theme.spacing(0, 2, 0, 2),
    width: `calc(100% - 100px)`,
    flex: 1,
    padding: theme.spacing(1, 3, 1, 3),
    backgroundColor: theme.palette.background.moduleAddInput,
    borderRadius: `10px`,
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
  avatarIcon: {
    height: `34px`,
    width: `34px`,
  },
}));

const ElementAdd = ({ type, onAdd, error, onSetError, onClearError}) => {

  const classes = useStyles();

  let placeholder = ``;
  let label = ``;
  // let general = ``;
  let icon = null;

  switch (type) {
    case typeElem.TODOS:
      placeholder = `Добавить мероприятие`;
      label = `Новое мероприятие`;
      icon = <EmojiNatureIcon />;
      break;
    
    default: break;
  }

  const [title, setTitle] = useState(``);

  const handleEdit = (e) => {
    switch (e.keyCode) {
      case 13:
        handleAdd();
        break;
      
      default: break;
    } 

    const newTitle = e.target.value;

    if (newTitle.length < 20) {
      if (error.general) {
        onClearError();
      }
      setTitle(newTitle);
    } else {
      onSetError({ general: `Длина строки должна быть меньше 20 символов` });
    }
  };

  const handleAdd = () => {
    if (title.trim() !== ``) {
      onAdd({ title });
    } else {
      onSetError({ general: `Название мероприятия не должно быть пустым` });
    }
    setTitle(``);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Paper className={classes.formControl}>
        <Avatar>
          {icon}
        </Avatar>
        <InputBase
          className={classes.input}
          placeholder={placeholder}
          inputProps={{ 'aria-label': label }}
          type="text"
          value={title}
          onChange={handleEdit}
        />
        <IconButton aria-label="Add" onClick={handleAdd}>
          <AddIcon />
        </IconButton>
      </Paper>
    </form>
  );
}

ElementAdd.propTypes = {
  type: pt.oneOf([typeElem.TODOS, typeElem.POS, typeElem.DOC, typeElem.QUESTION, typeElem.ANSWER]).isRequired,
  onAdd: pt.func.isRequired,
  error: pt.object.isRequired,
  onSetError: pt.func.isRequired,
  onClearError: pt.func.isRequired, 
};

export default ElementAdd;
